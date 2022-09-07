import 'rease/jsx'
import { TypeReaseContext } from 'rease'
import { involve } from 'rease'

import { DesktopWindow, desktopResizeGrid, useClearHoverAndFocusListener } from './Window.rease'
import { useDashboardContextmenu, schema2contextmenu } from './Contextmenu.rease'

const SCHEMA_CONTEXTMENU = [
  { title: 'Создать файл', click: () => {} },
  { title: 'Создать папку', click: () => {} },,

  { title: 'Настройки', click: () => {} },,

  {
    title: '__Создать пустое окно__',
    click: (ctx: TypeReaseContext): void => {
      involve(ctx, () => {
        <DesktopWindow />
      }, [])
    }
  },
]

const contextmenu = schema2contextmenu(SCHEMA_CONTEXTMENU)

export function DashboardDesktop(
  this: TypeReaseContext
): void {
  const styleTop = '2em'
  ;(
    <div
      class={['position-absolute', 'bottom-0', 'start-0', 'end-0']}
      style--z-index="1"

      style--top={styleTop}

      r-use={[useDashboardContextmenu(contextmenu), useClearHoverAndFocusListener]}
    >
      {/* <DesktopWindow />
      <DesktopWindow />
      <DesktopWindow /> */}
    </div>
  )
  desktopResizeGrid(styleTop)
}
