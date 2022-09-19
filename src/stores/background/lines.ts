import { random, randomTo } from '#utils/math'

// export const linesSchema = (): number[][] => {
//   const res: number[][] = []
//   const l1 = randomTo(0, 360), l2 = l1 + 45
//   for (let i = 9; i-- > 0;) {
//     res.push([randomTo(0, 360), random() * 99, randomTo(l1, l2) * (random() - 1)])
//   }
//   return res
// }

export const linesSchema = (): number[][] => {
  const res: number[][] = [], plus = randomTo(1, 11) * 30
  let l1 = randomTo(0, 360), l2 = l1 + 30
  for (let i = 9; i-- > 0;) {
    res.push([randomTo(0, 360), random() * 99, randomTo(l1, l2)])
    l1 += plus, l2 += plus
  }
  return res
}

export const createLinesBySchema = (
  schema: number[][], s: number, l: number
): string => {
  const res: string[] = []
  for (let a: number[], i = schema.length; i-- > 0;) {
    a = schema[i]
    res.push(`linear-gradient(${
      a[0]
    }deg, ${
      i ? 'transparent 0%' : `hsl(${a[2] + -45},${s}%,${l}%) 0%`
    }, hsl(${a[2]},${s}%,${l}%) ${a[1]}%, ${
      i ? `transparent ${a[1] + 0.25}%` : `hsl(${a[2] + 45},${s}%,${l}%) 100%`
    })`)
  }

  return '' + res
}
