import 'rease/jsx'
import { TypeReaseContext } from 'rease'

import { DashboardTopbar } from './Topbar.rease'
import { DashboardDesktop } from './Desktop.rease'
import { DashboardContextmenu } from './Contextmenu.rease'

import { createBackgroundBySchema, $BACKGROUND_SCHEMA } from '#stores/background'

export function Dashboard(
  this: TypeReaseContext
): void {
  <div
    class={['position-fixed', 'w-100', 'h-100', 'top-0', 'start-0']}
  >
    <div
      class="dashboard"
      style={'position:absolute;top:-20px;bottom:-20px;left:-20px;right:-20px;'}
      style--backgroundColor={'#000'}
      style--backgroundImage={createBackgroundBySchema($BACKGROUND_SCHEMA!!, 100, 50)}
      // style--filter={'blur(1px)'}

    />
    <DashboardTopbar/>
    <DashboardDesktop/>
    <DashboardContextmenu/>
  </div>
}
// Dashboard.css = <style jsx>{`
// .dashboard {
//   transition: background 5s linear;
//   // background-size: 200% 200%;
//   // animation: gradient 60s ease infinite;
// }

// @keyframes gradient {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
// `}</style>
