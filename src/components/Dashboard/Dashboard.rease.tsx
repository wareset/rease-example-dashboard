import 'rease/jsx'
import { TypeReaseContext } from 'rease'

import { DashboardTopbar } from './Topbar.rease'
import { DashboardDesktop } from './Desktop.rease'
import { DashboardContextmenu } from './Contextmenu.rease'

import createCssGragient from '../../utils/createCssGragient'

export function Dashboard(
  this: TypeReaseContext
): void {
  <div
    class={['position-fixed', 'w-100', 'h-100', 'top-0', 'start-0']}
  >
    <div
      style={'position:absolute;top:-20px;bottom:-20px;left:-20px;right:-20px;'}
      style--backgroundColor={'hsl(0,80%,60%)'}
      style--backgroundImage={createCssGragient()}
      style--filter={'blur(10px)'}
    />
    <DashboardTopbar/>
    <DashboardDesktop/>
    <DashboardContextmenu/>
  </div>
}
