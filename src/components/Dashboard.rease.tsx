import 'rease/jsx'
import { TypeReaseContext } from 'rease'

import DashboardDesktop from './Dashboard/Desktop.rease'
import DashboardContextmenu, { useDashboardContextmenu } from './Dashboard/Contextmenu.rease'

import createCssGragient from '../utils/createCssGragient'

function DashboardTopbar(
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

export default function Dashboard(
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
