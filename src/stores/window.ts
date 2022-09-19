import { subjectGlobal, subscribeGlobal, listenEventGlobal, listenResizeGlobal } from 'rease'

const resize = (): void => { $windowForResize.set(window) }

export const $windowForResize =
 subjectGlobal<Partial<Window>>(window, () => {
   window.addEventListener('resize', resize, true)
   return () => {
     window.removeEventListener('resize', resize, true)
   }
 })

// export { $innerHeight, $innerWidth, $outerHeight, $outerWidth }

export const $isVertical = subjectGlobal<boolean>(
  false,
  ($value) =>
    subscribeGlobal($windowForResize, (w, is) => {
      if (is[0] !== (is[0] = w.innerWidth! < w.innerHeight!)) is[1].$ = is[0]
    }, [$value.$, $value])
)

// listenEventGlobal(window, 'resize', (e) => {
//   console.log(222, e)
// })

// listenResizeGlobal(document.body, (e) => {
//   console.log(111, e)
// })
