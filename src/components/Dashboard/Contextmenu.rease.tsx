import 'rease/jsx'
import { TypeReaseContext, TypeResizeListener, TypeReaseUse } from 'rease'
import { listenEvent, listenEventGlobal } from 'rease'
import { subject, subjectGlobal } from 'rease'
import { infocusElement as dispatchInfocusEvent } from 'rease'

import clearSelection from '#utils/clearSelection'

export const [
  DashboardContextmenu,
  useContextmenu,
  createContextmenu
] = (() => {
  type TypeFn = (ctx: TypeReaseContext) => void
  
  let lastCEvent!: MouseEvent | PointerEvent

  const $cmenuFn = subjectGlobal<null | [TypeFn, TypeReaseContext]>(null)

  const hideDashboardContextmenu = (): void => {
    if ($cmenuFn.$) {
      dispatchInfocusEvent($cmenuFn.$[1].node as any)
      $cmenuFn.$ = null
    }
  }
  
  const useContextmenu = (fn: TypeFn, self?: boolean): TypeReaseUse =>
    (ctx) => listenEventGlobal(
      ctx.node!, 'contextmenu-prevent-stop' + (!self ? '' : '-self'), (e: any) => {
        lastCEvent = e, $cmenuFn.$ = [fn, ctx]
      }
    )

  function DashboardContextmenu(
    this: TypeReaseContext
  ): void {
    const $client = subject<{ X: number, Y: number }>({ X: 0, Y: 0 })
    // const $opacity = subject<number>(0)
    
    const resizer: TypeResizeListener<any> = (e: any) => {
      const w = e.width, h = e.height

      let { X, Y } = $client.$

      // $opacity.$ = 0
      // console.log(111, e)
      X = lastCEvent.clientX
      Y = lastCEvent.clientY
      if (X + w > window.innerWidth) X -= w
      if (Y + h > window.innerHeight) Y -= h
      if (X < 0) X = 0
      if (Y < 0) Y = 0
      // $opacity.$ = 1

      $client.$ = { X, Y }
    }
  
    ;(
      <r-if r-is={$cmenuFn!!} r-children={([cmenuFn, ctx]) => {
        <div
          class={['position-fixed', 'top-0', 'bottom-0', 'start-0', 'end-0']}
          style--z-index="1"
          // style--backgroundColor="rgba(0,0,0,0.1)"

          // r-on-infocus-01={() => {
          //   console.log('Context infocus')
          // }}
          // r-on-unfocus-01={() => {
          //   console.log('Context unfocus')
          // }}
  
          r-on-tapstart-self={hideDashboardContextmenu}
          // r-on-infocus={(e: any) => { e.detail.strict() }}
          r-on-contextmenu-capture-prevent-stop={[]}

          r-children={() => {
            listenEvent(window, 'resize', hideDashboardContextmenu)
            clearSelection()
            // setTimeout(unfocus, 1000)

            // console.log(ctx)
  
            ;(
              <div
                class={[
                  'position-fixed',
                  'animated zoomIn',
                  'dropdown-menu dropdown-menu-dark show'
                ]}
                style="--animate-duration: 0.125s"
                // style--opacity={$opacity!!}
  
                style--left={$client!!.X + 'px'}
                style--top={$client!!.Y + 'px'}
  
                r-on-resize={resizer}

                r-on-click-prevent-stop={hideDashboardContextmenu}
  
                r-children={() => { cmenuFn(ctx) }}
              />
            )
          }}
        />
      }}
      />
    )
  }

  const createContextmenu = (
    SCHEMA: ({ title: any, key?: any, click: Function } | undefined)[]
  ) => (ctx: TypeReaseContext): void => {
    for (const schema of SCHEMA) {
      if (schema) {
        <li>
          <button
            type="button"
            class="dropdown-item"
            r-on-click={() => { schema.click(ctx) }}
          >
            <span>{schema.title!!}</span>
            <r-if r-is={schema.key!!}>
              <span class="ms-3 float-end">{schema.key!!}</span>
            </r-if>
          </button>
        </li>
      } else {
        <li>
          <hr class="dropdown-divider"/>
        </li>
      }
    }
  }

  // DashboardContextmenu.css = <style jsx>{`
  // .card * {
  //   color: inherit !important;
  //   background: inherit !important;
  // }
  // `}</style>

  return [DashboardContextmenu, useContextmenu, createContextmenu]
})()
