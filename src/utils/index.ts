export const noop = ((): void => {}) as (...a: any[]) => any

export const reflow = (element: HTMLElement): any => element.offsetHeight

export const dataset = (
  E: HTMLElement | SVGElement, key: string, value?: string | null
): void => {
  if (value == null || value === '') E.removeAttribute('data-' + key)
  else E.setAttribute('data-' + key, value)
}

export const dataget = (
  E: HTMLElement | SVGElement, key: string
): string | null => E.getAttribute('data-' + key)
