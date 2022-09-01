import 'rease/jsx'
// import ENV from 'rease/env'
import { TypeReaseContext, TypeReaseProp, TypeReaseSubject } from 'rease'
import { subject, subjectGlobal, onDestroy, destroy, subscribe } from 'rease'
import { subscribeSafeAllGlobal, $innerWidth, $innerHeight } from 'rease'
import { listenGlobal } from 'rease'

import { useDashboardContextmenu, schema2contextmenu } from '../Contextmenu.rease'

import { noop } from '../../../utils'
import { randomTo, round, min, max } from '../../../utils/math'
import { random_string } from '../../../utils/string'
import clearSelection from '../../../utils/clearSelection'

import { onPan } from 'rease-use'

import aliquot from 'aliquot'

const $GRID_COEF_W = subjectGlobal<number>(10)
const $GRID_COEF_H = subjectGlobal<number>(10)
subscribeSafeAllGlobal([$innerWidth, $innerHeight], ([w, h]) => {
  // $GRID_COEF_W.$ = 100 / ceil(100 / ($GRID_COEF_H.$ / w * h))

  $GRID_COEF_W.$ = 100 / round(w / 50)
  $GRID_COEF_H.$ = 100 / round(h / 50)
})

const $FOCUSED_ID = subjectGlobal<string>('')
const $HOVERED_ID = subjectGlobal<string>('')

let Z_INDEX = 1
const Z_INDEXES: { [key: string]: TypeReaseSubject<number> } = {}
const fixZIndexes = (
  lastZindex: TypeReaseSubject<number>,
  id: string
): void => {
  if (Z_INDEX > 4e9) {
    for (const id in Z_INDEXES) Z_INDEXES[id].$ = 1
    lastZindex.$ = Z_INDEX = 2
  } else if (Z_INDEX !== lastZindex.$) {
    lastZindex.$ = ++Z_INDEX
  }
  $HOVERED_ID.$ = $FOCUSED_ID.$ = id
}

export const useClearHoverAndFocusListener = (ctx: any): any =>
  listenGlobal(ctx.node, 'pointerdown-capture', () => {
    $HOVERED_ID.$ = $FOCUSED_ID.$ = ''
  })

const title_btn = (
  name: string,
  onClick: Function
): void => {
  <button
    type="button"
    class={[
      'btn btn-sm btn-primary',
      'p-0 ms-2 lh-1 rounded-pill',
      'd-inline-flex justify-content-center align-items-center'
    ]}

    style--width="1.625em"
    style--height="1.625em"
  
    r-on-click={onClick}
  >
    <i
      role="img"
      aria-label={name}
      class={[`bi-${name}`]}
      style="margin-bottom:-0.0625em;"
    />
  </button>
}

const $IS_RESIZE_GRID = subjectGlobal<string>('')
const showResizeGrid = (cursor: string): void => { $IS_RESIZE_GRID.$ = cursor }
const hideResizeGrid = (): void => { $IS_RESIZE_GRID.$ = '' }
export const desktopResizeGrid = ($styleTop$: any): void => {
  const imageColor = 'rgba(128,128,128,0.25)'
  const image = `linear-gradient(to right, ${imageColor} 1px,transparent 1px),linear-gradient(to bottom,${imageColor} 1px,transparent 1px)`
  ;(
    <div
      class={['position-absolute', 'bottom-0', 'start-0', 'end-0']}
      style={{
        zIndex         : 1,
        top            : $styleTop$!!,
        cursor         : $IS_RESIZE_GRID!!,
        display        : $IS_RESIZE_GRID!! ? 'block' : 'none',
        backgroundImage: image,
        backgroundSize : `${$GRID_COEF_W!!}% ${$GRID_COEF_H!!}%`
      }}

      r-on-contextmenu-prevent-stop={noop}
    />
  )
}

const setSize = (wh: any, coef: number): number => 100 / parseFloat(wh) * coef

export default function DesktopWindow(
  this: TypeReaseContext,
  {
    title,
    top,
    left,
    right,
    bottom
  }: {
    title?: TypeReaseProp<string>
    top?: number
    left?: number
    right?: number
    bottom?: number
  } = {}
): void {
  const id = this.pub.id = random_string()

  const w = randomTo(30, 60), h = randomTo(30, 60)
  if (top == null) top = randomTo(0, 100 - h)
  if (left == null) left = randomTo(0, 100 - w)
  if (right == null) right = randomTo(0, 100 - w - left)
  if (bottom == null) bottom = randomTo(0, 100 - h - top)
  
  const setTop = (v: number): number =>
    top = aliquot(max(v, 0), $GRID_COEF_H.$)
  const setLeft = (v: number): number =>
    left = aliquot(min(v, 100 - $GRID_COEF_W.$), $GRID_COEF_W.$)
  const setRight = (v: number): number =>
    right = aliquot(min(v, 100 - $GRID_COEF_W.$), $GRID_COEF_W.$)
  const setBottom = (v: number): number =>
    bottom = aliquot(min(v, 100 - $GRID_COEF_H.$), $GRID_COEF_H.$)
  setTop(top), setLeft(left), setRight(right), setBottom(bottom)

  const setHoveredId = (): void => { $HOVERED_ID.$ = id }
  const setZIindex = (): void => { fixZIndexes($zi, id) }
  const $zi = Z_INDEXES[id] = subject<number>(-1)
  onDestroy(() => { delete Z_INDEXES[id] })
  setZIindex()

  const windowClose = (): void => { destroy(this) }
  const $isFullscreen = subject<boolean>(false)
  const toggleFullscreen = (): void => { $isFullscreen.$ = !$isFullscreen.$ }

  const $fullscreenTitle = subject<string>()
  subscribe($isFullscreen, (isFullscreen) => {
    $fullscreenTitle.$ = isFullscreen ? 'Восстановить' : 'Развернуть'
  })

  ;(
    <div
      id={id}
      class={['card', 'position-absolute']}

      style={{
        top   : ($isFullscreen!! ? 0 : top) + '%',
        left  : ($isFullscreen!! ? 0 : left) + '%',
        right : ($isFullscreen!! ? 0 : right) + '%',
        bottom: ($isFullscreen!! ? 0 : bottom) + '%',
        
        zIndex: $zi!!,

        minWidth : '4em',
        minHeight: '4em'
      }}

      r-on-pointerdown={setZIindex}
      r-on-inhover={setHoveredId}
      r-on-infocus={setZIindex}
    >
      <div
        class={[
          'card-header',
          'd-flex align-items-center',
          'p-1 overflow-hidden user-select-none'
        ]}
        style--z-index="1"

        r-use={[useDashboardContextmenu(schema2contextmenu([
          { title: $fullscreenTitle, click: toggleFullscreen },,
          { title: 'Закрыть', click: windowClose }
        ]), true)]}
      >
        <div
          class={['flex-fill', 'text-truncate', 'px-1']}
          style="margin-bottom:-0.0625em;"

          r-on-dblclick={toggleFullscreen}

          r-use={[onPan((e, ctx) => {
            /* MOVE BY TITLE */
            clearSelection()
            const [typeA, $isFs, setTop, setLeft, setRight, setBottom] = e.detail

            if (!$isFs.$) {
              typeA[0] = e.type
              const node = ctx.parent.parent.node as HTMLElement

              let style: any
              if (e.type === 'start') {
                setTimeout((typeA) => {
                  if (typeA[0] !== 'end') {
                    showResizeGrid(ctx.node.style.cursor = 'move')
                  }
                }, 125, typeA)
                style = getComputedStyle(node)
              } else {
                style = node.style
              }

              const t = parseFloat(style.top) + e.delta.y
              const l = parseFloat(style.left) + e.delta.x
              const r = parseFloat(style.right) - e.delta.x
              const b = parseFloat(style.bottom) - e.delta.y

              style = node.style
              if (e.type === 'end') {
                hideResizeGrid()
                ctx.node.style.cursor = ''
                const pes = getComputedStyle(node.parentElement!)
                style.top = setTop(setSize(pes.height, t)) + '%'
                style.left = setLeft(setSize(pes.width, l)) + '%'
                style.right = setRight(setSize(pes.width, r)) + '%'
                style.bottom = setBottom(setSize(pes.height, b)) + '%'
              } else {
                style.top = t + 'px'
                style.left = l + 'px'
                style.right = r + 'px'
                style.bottom = b + 'px'
              }
            }
          }, [[''], $isFullscreen, setTop, setLeft, setRight, setBottom])]}
        >
          {title!! || id}
        </div>
        <div class="text-nowrap">
          {(
            title_btn('dash-lg', noop),
            title_btn('plus-lg', toggleFullscreen),
            title_btn('x-lg', windowClose)
          )}
        </div>
      </div>

      <div
        class={['card-body', 'position-relative']}
        style--z-index="1"
      >
        <div
          class={['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100']}
          style--z-index="1"
        >
          empty
        </div>

        <div
          class={['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100']}
          style--display={$FOCUSED_ID!! === id ? 'none' : 'block'}
          style--backgroundColor={'rgba(0,0,0,0.05)'}
          style--z-index="1"

          r-on-contextmenu-prevent-stop={noop}
        />
      </div>

      <r-if r-is={!$isFullscreen!!}>
        <div
          style="position:absolute;z-index:1;top:-0.25em;left:0;width:100%;height:0.5em;cursor:ns-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE TOP */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ns-resize')
            else style = node.style

            const t = parseFloat(style.top) + e.delta.y

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const pes = getComputedStyle(node.parentElement!)
              style.top = setTop(setSize(pes.height, t)) + '%'
            } else {
              style.top = t + 'px'
            }
          }, [setTop])]}
        />
        <div
          style="position:absolute;z-index:1;bottom:-0.25em;left:0;width:100%;height:0.5em;cursor:ns-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE BOTTOM */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ns-resize')
            else style = node.style

            const b = parseFloat(style.bottom) - e.delta.y

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setBottom] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.bottom = setBottom(setSize(pes.height, b)) + '%'
            } else {
              style.bottom = b + 'px'
            }
          }, [setBottom])]}
        />
        <div
          style="position:absolute;z-index:1;top:0;left:-0.25em;width:0.5em;height:100%;cursor:ew-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE LEFT */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ew-resize')
            else style = node.style

            const l = parseFloat(style.left) + e.delta.x

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setLeft] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.left = setLeft(setSize(pes.width, l)) + '%'
            } else {
              style.left = l + 'px'
            }
          }, [setLeft])]}
        />
        <div
          style="position:absolute;z-index:1;top:0;right:-0.25em;width:0.5em;height:100%;cursor:ew-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE RIGHT */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ew-resize')
            else style = node.style

            const r = parseFloat(style.right) - e.delta.x

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setRight] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.right = setRight(setSize(pes.width, r)) + '%'
            } else {
              style.right = r + 'px'
            }
          }, [setRight])]}
        />
        <div
          style="position:absolute;z-index:1;top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:nw-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE TOP-LEFT */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('nw-resize')
            else style = node.style

            const t = parseFloat(style.top) + e.delta.y
            const l = parseFloat(style.left) + e.delta.x

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setTop, setLeft] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.top = setTop(setSize(pes.height, t)) + '%'
              style.left = setLeft(setSize(pes.width, l)) + '%'
            } else {
              style.top = t + 'px'
              style.left = l + 'px'
            }
          }, [setTop, setLeft])]}
        />
        <div
          style="position:absolute;z-index:1;top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:ne-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE TOP-RIGHT */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ne-resize')
            else style = node.style

            const t = parseFloat(style.top) + e.delta.y
            const r = parseFloat(style.right) - e.delta.x

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setTop, setRight] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.top = setTop(setSize(pes.height, t)) + '%'
              style.right = setRight(setSize(pes.width, r)) + '%'
            } else {
              style.top = t + 'px'
              style.right = r + 'px'
            }
          }, [setTop, setRight])]}
        />
        <div
          style="position:absolute;z-index:1;bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:sw-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE BOTTOM-LEFT */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('sw-resize')
            else style = node.style

            const b = parseFloat(style.bottom) - e.delta.y
            const l = parseFloat(style.left) + e.delta.x

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setBottom, setLeft] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.bottom = setBottom(setSize(pes.height, b)) + '%'
              style.left = setLeft(setSize(pes.width, l)) + '%'
            } else {
              style.bottom = b + 'px'
              style.left = l + 'px'
            }
          }, [setBottom, setLeft])]}
        />
        <div
          style="position:absolute;z-index:1;bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:se-resize;"

          r-use={[onPan((e, ctx) => {
            /* RESIZE BOTTOM-RIGHT */
            clearSelection()

            const node = ctx.parent.parent.node as HTMLElement
            let style: any
            if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('se-resize')
            else style = node.style

            const b = parseFloat(style.bottom) - e.delta.y
            const r = parseFloat(style.right) - e.delta.x

            style = node.style
            if (e.type === 'end') {
              hideResizeGrid()
              const [setBottom, setRight] = e.detail
              const pes = getComputedStyle(node.parentElement!)
              style.bottom = setBottom(setSize(pes.height, b)) + '%'
              style.right = setRight(setSize(pes.width, r)) + '%'
            } else {
              style.bottom = b + 'px'
              style.right = r + 'px'
            }
          }, [setBottom, setRight])]}
        />
      </r-if>

    </div>
  )
}
