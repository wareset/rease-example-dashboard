export const noop = ((): void => {}) as (...a: any[]) => any

export const reflow = (element: HTMLElement): any => element.offsetHeight
