import 'rease/jsx'
// import ENV from 'rease/env'
import { TypeReaseContext, TypeReaseProp, TypeReaseSubject } from 'rease'
import { subject, subjectGlobal, onDestroy, destroy, subscribe } from 'rease'
import { subscribeSafeAllGlobal, $innerWidth, $innerHeight } from 'rease'
import { listenGlobal } from 'rease'

import { useDashboardContextmenu, schema2contextmenu } from './Contextmenu.rease'

import { noop, dataget } from '../../utils'
import { randomTo, min, max, parseFloat as toFloat } from '../../utils/math'
import { random_string } from '../../utils/string'
import clearSelection from '../../utils/clearSelection'

import { onPan } from 'rease-use'

import aliquot from 'aliquot'
// @ts-ignore
window.aliquot = aliquot
const $GRID_COEF_W = subjectGlobal<number>(10)
const $GRID_COEF_H = subjectGlobal<number>(10)
subscribeSafeAllGlobal([$innerWidth, $innerHeight], ([w, h]) => {
  // $GRID_COEF_W.$ = 100 / ceil(100 / ($GRID_COEF_H.$ / w * h))

  const wc = aliquot(w / 50, 6) || aliquot(w / 50, 4) || 2

  $GRID_COEF_W.$ = 100 / wc
  $GRID_COEF_H.$ = 100 / (aliquot(h / (w / wc), 6) || (w > h ? 2 : 3))

  // console.log([w, h])
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
    Z_INDEX = 1
    for (const id in Z_INDEXES) Z_INDEXES[id].$ = ++Z_INDEX
    lastZindex.$ = ++Z_INDEX
  } else if (Z_INDEX !== lastZindex.$) {
    lastZindex.$ = ++Z_INDEX
  }
  $HOVERED_ID.$ = $FOCUSED_ID.$ = id
}

export const useClearHoverAndFocusListener = (ctx: any): any =>
  listenGlobal(ctx.node, 'tapstart-capture-self', () => {
    $HOVERED_ID.$ = $FOCUSED_ID.$ = ''
  })

const title_btn = (
  name: string,
  bg: string,
  onClick: Function
): void => {
  <button
    type="button"
    class={[
      'btn btn-sm btn-' + bg,
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

const setSize = (wh: any, coef: number): number => 100 / toFloat(wh) * coef

export function DesktopWindow(
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

  const w = randomTo(30, 50), h = randomTo(30, 50)
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
      class={['card', 'position-absolute', 'bg-dark text-white']}

      style={{
        top   : ($isFullscreen!! ? 0 : top) + '%',
        left  : ($isFullscreen!! ? 0 : left) + '%',
        right : ($isFullscreen!! ? 0 : right) + '%',
        bottom: ($isFullscreen!! ? 0 : bottom) + '%',
        
        zIndex: $zi!!,

        minWidth : $GRID_COEF_W!! + '%',
        minHeight: $GRID_COEF_H!! + '%',
      }}

      // r-on-tapstart={setZIindex}
      r-on-inhover={setHoveredId}
      r-on-infocus={setZIindex}

      r-use={[
        onPan((e, ctx) => {
          const [typeA, $isFs, setTop, setLeft, setRight, setBottom] = e.detail

          if (e.type === 'start' && !$isFs.$) {
            typeA[0] = dataget(e.event.target as HTMLElement, 'resize') as any
          }

          if (typeA[0]) {
            const dr = typeA[0]
            const node = ctx.node as HTMLElement

            let style: any
            if (e.type === 'start') {
              style = getComputedStyle(node)
              showResizeGrid(dr === 'move' ? dr : dr + '-resize')
            } else {
              style = node.style
            }

            let t!: number, l!: number, r!: number, b!: number

            if (dr === 'move' || dr[0] === 'n') {
              t = toFloat(style.top) + e.delta.y
            }
            if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
              l = toFloat(style.left) + e.delta.x
            }
            if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
              r = toFloat(style.right) - e.delta.x
            }
            if (dr === 'move' || dr[0] === 's') {
              b = toFloat(style.bottom) - e.delta.y
            }

            style = node.style
            if (e.type === 'end') {
              typeA[0] = null
              hideResizeGrid()
              const pes = getComputedStyle(node.parentElement!)
              if (dr === 'move' || dr[0] === 'n') {
                style.top = setTop(setSize(pes.height, t)) + '%'
              }
              if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                style.left = setLeft(setSize(pes.width, l)) + '%'
              }
              if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                style.right = setRight(setSize(pes.width, r)) + '%'
              }
              if (dr === 'move' || dr[0] === 's') {
                style.bottom = setBottom(setSize(pes.height, b)) + '%'
              }
            } else {
              clearSelection()
              if (dr === 'move' || dr[0] === 'n') {
                style.top = t + 'px'
              }
              if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                style.left = l + 'px'
              }
              if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                style.right = r + 'px'
              }
              if (dr === 'move' || dr[0] === 's') {
                style.bottom = b + 'px'
              }
            }
          }
        }, [[null], $isFullscreen, setTop, setLeft, setRight, setBottom])
      ]}
    >
      <div
        class={[
          'card-header',
          'd-flex align-items-center',
          'p-1 overflow-hidden user-select-none',
          $FOCUSED_ID!! === id ? 'bg-primary' : 'bg-secondary'
        ]}
        style--opacity={$HOVERED_ID!! === id ? 1 : 0.875}
        style--z-index="1"

        r-use={[useDashboardContextmenu(schema2contextmenu([
          { title: $fullscreenTitle, click: toggleFullscreen },,
          { title: 'Закрыть', click: windowClose }
        ]), true)]}
      >
        <div
          class={['flex-fill', 'text-truncate', 'px-1']}
          style="margin-bottom:-0.0625em;"
          data-resize="move" /* RESIZE MOVE */

          r-on-dblclick={toggleFullscreen}
        >
          {title!! || id}
        </div>
        <div class="text-nowrap">
          {(
            title_btn('dash-lg', 'dark', noop),
            title_btn('plus-lg', 'dark', toggleFullscreen),
            title_btn('x-lg', 'danger', windowClose)
          )}
        </div>
      </div>

      <div
        class={['card-body', 'position-relative']}
        style--z-index="1"
      >
        <div
          style={'z-index:1;position:absolute;top:2px;bottom:2px;left:2px;right:2px;'}
          // style--backgroundColor={'#ad3'}
        >
          <r-slot>empty</r-slot>
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
          style="position:absolute;z-index:1;top:-0.25em;left:0;width:100%;height:0.5em;cursor:n-resize;"
          data-resize="n" /* RESIZE TOP */
        />
        <div
          style="position:absolute;z-index:1;bottom:-0.25em;left:0;width:100%;height:0.5em;cursor:s-resize;"
          data-resize="s" /* RESIZE BOTTOM */
        />
        <div
          style="position:absolute;z-index:1;top:0;left:-0.25em;width:0.5em;height:100%;cursor:w-resize;"
          data-resize="w" /* RESIZE LEFT */
        />
        <div
          style="position:absolute;z-index:1;top:0;right:-0.25em;width:0.5em;height:100%;cursor:e-resize;"
          data-resize="e" /* RESIZE RIGHT */
        />
        <div
          style="position:absolute;z-index:1;top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:nw-resize;"
          data-resize="nw" /* RESIZE TOP-LEFT */
        />
        <div
          style="position:absolute;z-index:1;top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:ne-resize;"
          data-resize="ne" /* RESIZE TOP-RIGHT */
        />
        <div
          style="position:absolute;z-index:1;bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:sw-resize;"
          data-resize="sw" /* RESIZE BOTTOM-LEFT */
        />
        <div
          style="position:absolute;z-index:1;bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:se-resize;"
          data-resize="se" /* RESIZE BOTTOM-RIGHT */
        />
      </r-if>

    </div>
  )
}
