import 'rease/jsx'
import { TypeReaseContext } from 'rease'
import { involve } from 'rease'

import { useContextmenu, createContextmenu } from './Contextmenu.rease'
import { DesktopWindow, visibleAllWindows, collapseAllWindows } from './Window.rease'

import { DashboardTopbarSettings } from '#apps/TopbarSettings'

export function DashboardTopbar(
  this: TypeReaseContext
): void {
  <div
    class={['position-absolute', 'w-100', 'top-0', 'left-0']}
    style--z-index="1"
    
    style--height={'2em'}
    style--backgroundColor={'rgba(0,0,0,0.75)'}

    r-use={[useContextmenu(createContextmenu([
      {
        title: 'Настройки панели',
        click: (ctx: TypeReaseContext): void => {
          involve(ctx.root.pub.DashboardDesktop, () => {
            <DesktopWindow
              title="Настройки панели"
              component={DashboardTopbarSettings}
            />
          }, [])
        }
      },,
    
      { title: 'Показать все окна', click: visibleAllWindows },
      { title: 'Свернуть все окна', click: collapseAllWindows }
    ]))]}
  ></div>
}
