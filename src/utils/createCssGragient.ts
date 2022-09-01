import { random, randomTo } from './math'
export default (): string => {
  const res: string[] = []
  for (let a: any, i = 20; i-- > 0;) {
    a = [random() * 99, random() * 99, random() * 99].sort((a, b) => a - b)
    res.push(`linear-gradient(${
      randomTo(-360, 360)
    }deg, transparent ${a[0]}%, hsl(${
      randomTo(240, 420)
    },100%,60%) ${a[1]}%, transparent ${a[2]}%)`)
  }

  return '' + res
}
