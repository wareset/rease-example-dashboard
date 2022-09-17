import { TypeReaseContext } from 'rease'

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

export const getParentReaseContextBy = (
  ctx: TypeReaseContext, key: string, value: any
): TypeReaseContext | null => {
  let parent = ctx as any
  while ((parent = ctx.parent) && parent[key] !== value);
  return parent
}
