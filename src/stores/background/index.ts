import { subjectGlobal, listenEventGlobal } from 'rease'

import { linesSchema, createLinesBySchema } from './lines'
// export { linesSchema, createLinesBySchema }

export { createLinesBySchema as createBackgroundBySchema }

export const $BACKGROUND_SCHEMA = subjectGlobal<number[][]>(
  [],
  // ($value) => {
  // console.log($value)
  // let int: any
  // const update = (): void => {
  //   const value = $value.$ as number[][]
  //   for (let i = value.length; i-- > 0;) {
  //     value[i][0] = (value[i][0] + (i % 2 ? 0.1 : -0.1)) % 360
  //   }
  //   $value.set(value)
  //   int = requestAnimationFrame(update)
  // }

  // update()
  // return () => { cancelAnimationFrame(int) }
  // }
)
export const changeBackground = (): void => { $BACKGROUND_SCHEMA.$ = linesSchema() }

changeBackground()

listenEventGlobal(null, 'KeyQ', () => {
  changeBackground()
})
