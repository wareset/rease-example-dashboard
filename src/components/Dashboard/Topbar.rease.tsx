import 'rease/jsx'
import { TypeReaseContext } from 'rease'

import { useDashboardContextmenu } from './Contextmenu.rease'

export function DashboardTopbar(
  this: TypeReaseContext
): void {
  <div
    class={['position-absolute', 'w-100', 'top-0', 'left-0']}
    style--z-index="1"
    
    style--height={'2em'}
    style--backgroundColor={'rgba(0,0,0,0.75)'}

    r-use={[useDashboardContextmenu(() => {
      <>TopBarContextMenu</>
    })]}
  ></div>
}
