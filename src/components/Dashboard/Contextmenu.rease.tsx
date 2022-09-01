import 'rease/jsx'
import { TypeReaseContext, TypeResizeListener, TypeReaseUse } from 'rease'
import { subject, subjectGlobal, listen, listenGlobal } from 'rease'

const [DashboardContextmenu, useDashboardContextmenu, schema2contextmenu] = (() => {
  type TypeFn = (ctx: TypeReaseContext) => void
  
  let lastCEvent!: MouseEvent | PointerEvent

  const $cmenuFn = subjectGlobal<null | [TypeFn, TypeReaseContext]>(null)

  const hideDashboardContextmenu = (): void => { $cmenuFn.$ = null }
  
  const useDashboardContextmenu = (fn: TypeFn, notSelf?: boolean): TypeReaseUse =>
    (ctx) => listenGlobal(
      ctx.node!, 'contextmenu-prevent-stop' + (notSelf ? '' : '-self'), (e: any) => {
        lastCEvent = e, $cmenuFn.$ = [fn, ctx]
      }
    )

  function DashboardContextmenu(
    this: TypeReaseContext
  ): void {
    const $clientX = subject<number>(0)
    const $clientY = subject<number>(0)
    // const $opacity = subject<number>(0)
    
    const resizer: TypeResizeListener<any> = (e) => {
      // $opacity.$ = 0
      // console.log(111, e)
      $clientX.$ = lastCEvent.clientX
      $clientY.$ = lastCEvent.clientY
      if ($clientX.$ + e.width > window.innerWidth) $clientX.$ -= e.width
      if ($clientY.$ + e.height > window.innerHeight) $clientY.$ -= e.height
      // $opacity.$ = 1
    }
  
    ;(
      <r-if r-is={$cmenuFn!!} r-children={([cmenuFn, ctx]) => {
        <div
          class={['position-absolute', 'top-0', 'bottom-0', 'start-0', 'end-0']}
          style--z-index="1"
          // style--backgroundColor="rgba(0,0,0,0.1)"
  
          r-on-pointerdown-prevent-stop-self={hideDashboardContextmenu}
  
          r-children={() => {
            listen(window, 'resize', hideDashboardContextmenu)
  
            ;(
              <div
                class={[
                  'position-fixed',
                  'animated zoomIn',
                  'dropdown-menu dropdown-menu-dark show'
                ]}
                style="--animate-duration: 0.125s"
                // style--opacity={$opacity!!}
  
                style--left={$clientX!! + 'px'}
                style--top={$clientY!! + 'px'}
  
                r-on-resize={resizer}

                r-on-contextmenu-prevent-stop={() => {}}
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

  const schema2contextmenu = (
    SCHEMA: ({ title: any, click: Function } | undefined)[]
  ) => (ctx: TypeReaseContext): void => {
    for (const schema of SCHEMA) {
      if (schema) {
        <li>
          <button
            type="button"
            class="dropdown-item"
            r-on-click={() => { schema.click(ctx) }}
          >
            {schema.title!!}
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

  return [DashboardContextmenu, useDashboardContextmenu, schema2contextmenu]
})()

export default DashboardContextmenu
export { useDashboardContextmenu, schema2contextmenu }
