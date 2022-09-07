const __random__ = Math.random

export const { round, ceil, floor, max, min } = Math

export const random = (): number => __random__() || random()

export const randomTo = (
  min: number,
  max: number = min
): number => round(random() * (max - min) + min)

export const clamp = (
  value: number,
  minValue: number = value,
  maxValue: number = value
): number => max(minValue, min(maxValue, value))

const __parseFloat__ = parseFloat
export { __parseFloat__ as parseFloat }
