import aliquot from 'aliquot'

import { random_string } from '#utils/string'

import { str2num } from './utils'
import { svgFile } from './svgFile'
import { svgFolder } from './svgFolder'

import { EXTENSIONS, extname } from 'mime-xdg'

const SALT = random_string()

const CACHE: { [key: string]: string } = {}

export const getIconClass = (name: string, isFolder?: boolean): string => {
  let id: string, data: string
  let h: number
  const s = 100
  const l = 40

  if (!isFolder) {
    const extension = extname(name).slice(1)
    id = 'f' + SALT + extension
    if (id in CACHE) return CACHE[id]

    const type = extension && extension in EXTENSIONS
      // @ts-ignore
      ? EXTENSIONS[extension][0].split('/')[0] || '' : ''

    h = aliquot(str2num(extension) * 360, 1) | 0

    data = svgFile(h, s, l, type, extension)
  } else {
    h = aliquot(str2num(extname(name) || name) * 360, 5) | 0, id = 'p' + SALT + h
    if (id in CACHE) return CACHE[id]
    data = svgFolder(h, s, l)
  }

  CACHE[id] = id = id.replace(/\W+/g, '_')

  const STYLE_NODE = document.createElement('style')
  document.head.appendChild(STYLE_NODE)
  STYLE_NODE.textContent =
    `.${id}{background: center/contain no-repeat url("data:image/svg+xml;utf8, ${data}")}\n`

  return id
}
