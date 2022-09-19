import 'rease/jsx'
import { TypeReaseContext } from 'rease'
import { involve, context } from 'rease'

import { DesktopWindow, desktopResizeGrid, visibleAllWindows, collapseAllWindows } from './Window.rease'
import { useContextmenu, createContextmenu } from './Contextmenu.rease'

import { DashboardDesktopSettings } from '#apps/DesktopSettings'
import { Shortcut } from '#components/Shortcut'

import { changeBackground } from '#stores/background'

// import { randomTo } from '#utils/math'

import { $isVertical } from '#stores/window'

import { EXTENSIONS } from 'mime-xdg'
// console.log(EXTENSIONS)

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
          'w-auto h-auto',
          'position-absolute top-0 start-0 end-0 bottom-0',
          'd-flex flex-wrap align-items-start align-content-start justify-content-center',
          'overflow-auto',
          $isVertical!! ? 'flex-column' : 'flex-row'
          // 'text-break'
          // 'd-flex align-items-center align-content-center justify-content-center'
        ]}
        style--z-index="1"
        // style--background="rgba(0,220,0,0.5)"

        r-on-wheel={(e: WheelEvent, ctx: TypeReaseContext) => {
          if (!e.defaultPrevented && e.button === 0 &&
          !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
            const node = ctx.node as HTMLElement
            if (node.scrollBy) {
              e.preventDefault()
              const delta = e.deltaY
              $isVertical.$ ? node.scrollBy(delta, 0) : node.scrollBy(0, delta)
            }
          }
        }}

        r-use={[
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
          
            { title: '__Изменить фон__', key: '(Q)', click: changeBackground },
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

        {/* {
          (() => {
            let i = 0
            for (const ext in EXTENSIONS) {
              <Shortcut
                name={++i + '.' + ext}
                isFolder = {Math.random() - 0.5 > 0}
              />
              if (i > 96) break
            }
          })()
        } */}

      </div>

      {/* <DesktopWindow />
      <DesktopWindow />
      <DesktopWindow /> */}
    </div>
  )
  desktopResizeGrid(styleTop)
}
