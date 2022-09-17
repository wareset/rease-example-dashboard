import 'rease/jsx'
// import ENV from 'rease/env'
import { TypeReaseContext, TypeReaseProp, TypeReaseSubject } from 'rease'
import { subject, subjectGlobal, onDestroy, destroy, subscribe, subscribeSafe } from 'rease'
import { subscribeSafeAllGlobal, $innerWidth, $innerHeight } from 'rease'

import { useContextmenu, createContextmenu } from './Contextmenu.rease'

import { noop, dataget } from '#utils/index'
import { random_string } from '#utils/string'
import { randomTo, min, max, parseFloat } from '#utils/math'

import clearSelection from '#utils/clearSelection'

import { onPan } from 'rease-use'

import aliquot from 'aliquot'

// @ts-ignore
window.aliquot = aliquot

const $GRID_SIZE = subjectGlobal<number>(50)
const $GRID_COEF = subjectGlobal<{ W: number, H: number }>({ W: 2, H: 2 })
subscribeSafeAllGlobal([$innerWidth, $innerHeight, $GRID_SIZE], ([w, h, gridSize]) => {
  const ws = w / gridSize, wc = aliquot(ws, 6) || aliquot(ws, 4) || aliquot(ws, 3) || 2
  const hs = h / (w / wc), hc = aliquot(hs, 6) || aliquot(hs, 4) || aliquot(hs, 3) || 2
  const gc = $GRID_COEF.$, W = 100 / wc, H = 100 / hc
  if (gc.W !== W || gc.H !== H) gc.W = W, gc.H = H, $GRID_COEF.next(gc)
})

const $HOVERED_WINDOW = subjectGlobal<TypeReaseContext | null>(null)
const $FOCUSED_WINDOW = subjectGlobal<TypeReaseContext | null>(null)

let Z_INDEX = 1
const Z_INDEXES: { [key: string]: TypeReaseSubject<number> } = {}
const COLLAPSES: { [key: string]: TypeReaseSubject<boolean> } = {}

export const visibleAllWindows = (): void => {
  for (const id in COLLAPSES) COLLAPSES[id].$ = false
}
export const collapseAllWindows = (): void => {
  for (const id in COLLAPSES) COLLAPSES[id].$ = true
}

const setZIndex = (
  lastZindex: TypeReaseSubject<number>,
  ctx: TypeReaseContext
): void => {
  if (Z_INDEX > 4e9) {
    Z_INDEX = 1; for (const id in Z_INDEXES) Z_INDEXES[id].$ = ++Z_INDEX
    lastZindex.$ = ++Z_INDEX
  } else if (Z_INDEX !== lastZindex.$) {
    lastZindex.$ = ++Z_INDEX
  }
  $HOVERED_WINDOW.$ = $FOCUSED_WINDOW.$ = ctx
}

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

const resize_div = (type: string, style: string): void => {
  <div
    style={`position:absolute;z-index:1;cursor:${type}-resize;${style}`}
    data-resize={type}
  />
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
      style={['z-index:1', {
        top            : $styleTop$!!,
        cursor         : $IS_RESIZE_GRID!!,
        display        : $IS_RESIZE_GRID!! ? 'block' : 'none',
        backgroundImage: image,
        backgroundSize : `${$GRID_COEF!!.W}% ${$GRID_COEF!!.H}%`
      }]}

      r-on-contextmenu-prevent-stop={noop}
    />
  )
}

const setSize = (wh: any, coef: number): number => 100 / parseFloat(wh) * coef

export function DesktopWindow<F extends((...args: any) => any)>(
  this: TypeReaseContext,
  {
    component,
    componentProps,
    title,
    top,
    left,
    right,
    bottom
  }: {
    component?: F
    componentProps?: Parameters<F>
    title?: TypeReaseProp<string>
    top?: number
    left?: number
    right?: number
    bottom?: number
  } = {}): void {
  const ctx = this
  const pub = ctx.pub
  pub.component = component
  const id = pub.id = 'w' + random_string()

  /*
    BEGIN SIZES
  */
  const w = randomTo(30, 50), h = randomTo(30, 50)
  if (top == null) top = randomTo(0, 100 - h)
  if (left == null) left = randomTo(0, 100 - w)
  if (right == null) right = randomTo(0, 100 - w - left)
  if (bottom == null) bottom = randomTo(0, 100 - h - top)
  
  const setTop = (v: number): number =>
    top = aliquot(max(v, 0), $GRID_COEF.$.H)
  const setLeft = (v: number): number =>
    left = aliquot(min(v, 100 - $GRID_COEF.$.W), $GRID_COEF.$.W)
  const setRight = (v: number): number =>
    right = aliquot(min(v, 100 - $GRID_COEF.$.W), $GRID_COEF.$.W)
  const setBottom = (v: number): number =>
    bottom = aliquot(min(v, 100 - $GRID_COEF.$.H), $GRID_COEF.$.H)
  setTop(top), setLeft(left), setRight(right), setBottom(bottom)
  /*
    END SIZES
  */

  /*--------------------------------------------------------------------------*/

  /*
    BEGIN $title
  */
  const $title = pub.$title = subject<string>('')
  subscribeSafe(title, (title) => { $title.$ = '' + (title || id) })
  /*
    END $title
  */

  /*--------------------------------------------------------------------------*/

  /*
    BEGIN $isFullscreen
  */
  const $fullscreenLabel = subject<string>('')
  const $fullscreenTransition = subject<boolean>(false)
  const $isFullscreen = pub.$isFullscreen = subject<boolean>(false)
  subscribe($isFullscreen, (isFullscreen, [$Label, $Transition]) => {
    $Label.$ = isFullscreen ? 'Восстановить' : 'Развернуть'
    $Transition.$ = true, setTimeout(() => { $Transition.$ = false }, 250)
  }, [$fullscreenLabel, $fullscreenTransition])
  /*
    END $isFullscreen
  */

  /*
    BEGIN $zIndex
  */
  const $zIndex = Z_INDEXES[id] = subject<number>(-1)
  onDestroy(() => { delete Z_INDEXES[id] })
  /*
    END $zIndex
  */

  /*
    BEGIN $isHovered and $isFocused
  */
  const $isHovered = pub.$isHovered = subject<boolean>(true)
  const $isFocused = pub.$isFocused = subject<boolean>(true)
  subscribe($isHovered, (is, [ctx]) => {
    if (is !== ($HOVERED_WINDOW.$ === ctx)) {
      $HOVERED_WINDOW.$ = is ? ctx : null
    }
  }, [ctx])
  subscribe($isFocused, (is, [ctx, $zIndex]) => {
    if (is !== ($FOCUSED_WINDOW.$ === ctx)) {
      $FOCUSED_WINDOW.$ = is ? (setZIndex($zIndex, ctx), ctx) : null
    }
  }, [ctx, $zIndex])
  subscribe($HOVERED_WINDOW, (HW, [ctx, $h]) => { $h.$ = HW === ctx }, [ctx, $isHovered])
  subscribe($FOCUSED_WINDOW, (FW, [ctx, $f]) => { $f.$ = FW === ctx }, [ctx, $isFocused])
  const inhover = (): void => { $isHovered.$ = true }
  const infocus = (): void => { $isFocused.$ = true }
  const unhover = (): void => { $isHovered.$ = false }
  const unfocus = (): void => { $isFocused.$ = false }
  /*
    END $isHovered and $isFocused
  */

  /*
    BEGIN $isCollapsed
  */
  const $isCollapsed = COLLAPSES[id] = pub.$isCollapsed = subject<boolean>(false)
  onDestroy(() => { delete COLLAPSES[id] })
  const $isCollapsedWindow = subject<boolean>(false)
  subscribe($isCollapsed, (isCollapsed) => {
    if (!isCollapsed) $isCollapsedWindow.$ = false
    else {
      unhover(), unfocus()
      setTimeout(() => { $isCollapsedWindow.$ = true }, 250)
    }
  })
  /*
    END $isCollapsed
  */

  const windowClose = (): void => { destroy(this) }
  const toggleFullscreen = (): void => { $isFullscreen.$ = !$isFullscreen.$ }
  const toggleCollapsed = (): void => { $isCollapsed.$ = !$isCollapsed.$ }

  ;(
    <div
      id={id}
      class={[
        'card',
        'position-absolute',
        'bg-dark text-white',
        'animated',
        $isCollapsedWindow!! && 'd-none',
        $isCollapsed!! ? 'zoomOut' : 'zoomIn'
      ]}

      style={['--animate-duration:0.25s', {
        top   : ($isFullscreen!! ? 0 : top) + '%',
        left  : ($isFullscreen!! ? 0 : left) + '%',
        right : ($isFullscreen!! ? 0 : right) + '%',
        bottom: ($isFullscreen!! ? 0 : bottom) + '%',
        
        minWidth : $GRID_COEF!!.W + '%',
        minHeight: $GRID_COEF!!.H + '%',
      }, $fullscreenTransition!! && 'transition: all 0.25s']}
      style--zIndex={$zIndex!!}

      // r-on-tapstart={setZIindex}
      r-on-inhover={inhover}
      r-on-infocus={infocus}
      r-on-unhover={unhover}
      r-on-unfocus={unfocus}

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
              t = parseFloat(style.top) + e.delta.y
            }
            if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
              l = parseFloat(style.left) + e.delta.x
            }
            if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
              r = parseFloat(style.right) - e.delta.x
            }
            if (dr === 'move' || dr[0] === 's') {
              b = parseFloat(style.bottom) - e.delta.y
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
          $isFocused!! ? 'bg-primary' : 'bg-secondary'
        ]}
        style="z-index:1"
        style--opacity={$isHovered!! ? 1 : 0.875}

        r-use={[useContextmenu(createContextmenu([
          { title: 'Свернуть', click: toggleCollapsed },
          { title: $fullscreenLabel, click: toggleFullscreen },,
          { title: 'Закрыть', click: windowClose }
        ]))]}
      >
        <div
          class={['flex-fill', 'text-truncate', 'px-1']}
          style="margin-bottom:-0.0625em"
          data-resize="move" /* RESIZE MOVE */

          r-on-dblclick={toggleFullscreen}
        >
          {$title!!}
        </div>
        <div class="text-nowrap">
          {(
            title_btn('dash-lg', 'dark', toggleCollapsed),
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
          r-children={() => {
            if (pub.component) (<pub.component {...(componentProps || {})} />)
            else (<r-text r-is={'empty'}/>)
          }}
        />

        <div
          class={['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100']}
          style--display={$isFocused!! ? 'none' : 'block'}
          style--backgroundColor={'rgba(0,0,0,0.125)'}
          style--z-index="1"

          r-on-contextmenu-prevent-stop={noop}
        />
      </div>

      <r-if r-is={!$isFullscreen!!} r-children={() => {
        /* RESIZE TOP */
        resize_div('n', 'top:-0.25em;left:0;width:100%;height:0.5em;')
        /* RESIZE BOTTOM */
        resize_div('s', 'bottom:-0.25em;left:0;width:100%;height:0.5em;')
        /* RESIZE LEFT */
        resize_div('w', 'top:0;left:-0.25em;width:0.5em;height:100%;')
        /* RESIZE RIGHT */
        resize_div('e', 'top:0;right:-0.25em;width:0.5em;height:100%;')
        /* RESIZE TOP-LEFT */
        resize_div('nw', 'top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;')
        /* RESIZE TOP-RIGHT */
        resize_div('ne', 'top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;')
        /* RESIZE BOTTOM-LEFT */
        resize_div('sw', 'bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;')
        /* RESIZE BOTTOM-RIGHT */
        resize_div('se', 'bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;')
      }}
      />

    </div>
  )
}
