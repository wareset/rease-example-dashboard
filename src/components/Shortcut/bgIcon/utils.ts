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
