export const str2num = (t: string): number => {
  let n = 0
  for (let h = 0; h < t.length; h++) {
    n += (361 + ++n) / (n + t.charCodeAt(h))
  }
  // if (n < 0) n = -n
  for (;n > 100;) n /= 10
  if (n > 1) n -= n | 0
  // console.log(n)
  return n // .toString(36).replace(/\./, '')
}

export const getExt = (filepath: string): string => {
  let _ext = ''
  const idx = filepath.lastIndexOf('.')
  if (idx > -1) _ext = filepath.slice(idx + 1)
  return _ext
}
