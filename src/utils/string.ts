import { randomTo } from './math'

export const random_string = (): string => randomTo(1e16, 9e16).toString(36)
