import 'rease/jsx'
import { TypeReaseContext } from 'rease'
import { involve, subjectGlobal, context } from 'rease'

import { DesktopWindow, desktopResizeGrid, visibleAllWindows, collapseAllWindows } from './Window.rease'
import { useContextmenu, createContextmenu } from './Contextmenu.rease'

import createCssGragient from '#utils/createCssGragient'
import { DashboardDesktopSettings } from '#apps/DesktopSettings'
import { Shortcut } from '#components/Shortcut'

import { randomTo } from '#utils/math'

export const $WALLPAPPER = subjectGlobal<string>('')
const changeWallpapper = (): void => { $WALLPAPPER.$ = createCssGragient() }
changeWallpapper()

export function DashboardDesktop(
  this: TypeReaseContext
): void {
  const styleTop = '2em'
  ;(
    <div
      class={['position-absolute', 'bottom-0', 'start-0', 'end-0']}
      style--z-index="1"

      style--top={styleTop}
    >
      {(this.root.pub.DashboardDesktop = context(), '')}
      <div
        class={[
          'position-absolute top-0 start-0 end-0 bottom-0',
          'd-flex flex-row flex-wrap align-content-start',
          'overflow-auto',
          // 'text-break'
        ]}
        style--z-index="1"
        // style--background="rgba(0,220,0,0.5)"

        r-use={[
          // useClearHoverAndFocusListener,
          useContextmenu(createContextmenu([
            { title: 'Создать файл', click: () => {} },
            { title: 'Создать папку', click: () => {} },,
          
            {
              title: 'Настройки',
              click: (ctx: TypeReaseContext): void => {
                involve(ctx.root.pub.DashboardDesktop, () => {
                  <DesktopWindow
                    title="Параметры рабочего стола"
                    component={DashboardDesktopSettings}
                  />
                }, [])
              }
            },,
  
            { title: 'Показать все окна', click: visibleAllWindows },
            { title: 'Свернуть все окна', click: collapseAllWindows },,
          
            { title: '__Изменить фон__', click: changeWallpapper },
            {
              title: '__Создать пустое окно__',
              click: (ctx: TypeReaseContext): void => {
                involve(ctx.root.pub.DashboardDesktop, () => {
                  <DesktopWindow />
                }, [])
              }
            },
          ]))
        ]}
      >

        {[...Array(randomTo(1, 20))].forEach(() => { <Shortcut/> })}
      </div>

      {/* <DesktopWindow />
      <DesktopWindow />
      <DesktopWindow /> */}
    </div>
  )
  desktopResizeGrid(styleTop)
}
