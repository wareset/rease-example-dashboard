export const svgFile = (
  h: number, s: number, l: number,
  type: string, extension: string
): string => {
  const start = `%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.8%22%2F%3E%3Cstop%20offset%3D%22.25%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22b%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20xlink%3Ahref%3D%22%23b%22%20id%3D%22n%22%20x1%3D%2216%22%20y1%3D%222%22%20x2%3D%2216%22%20y2%3D%2222%22%20gradientUnits%3D%22userSpaceOnUse%22%2F%3E%3CradialGradient%20xlink%3Ahref%3D%22%23a%22%20id%3D%22g%22%20cx%3D%2215.596%22%20cy%3D%2216.458%22%20fx%3D%2215.596%22%20fy%3D%2216.458%22%20r%3D%221.615%22%20gradientTransform%3D%22matrix(9.90475%200%200%209.90475%20-138.476%20-147.016)%22%20gradientUnits%3D%22userSpaceOnUse%22%2F%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M8.575%202h14.85c.87%200%202.394-.013%202.992.587.596.598.582%202.118.582%202.988v20.85c0%20.87.014%202.395-.586%202.993-.598.596-2.119.582-2.989.582H8.574c-.87%200-2.394.013-2.992-.587C4.986%2028.815%205%2027.295%205%2026.425V5.575c0-.87-.014-2.395.586-2.993C6.184%201.986%207.705%202%208.575%202z%22%20fill%3D%22hsl(${h}%2C${s}%25%2C${l}%25)%22%2F%3E%20%3Cpath%20d%3D%22M8.574%202c-.87%200-2.39-.014-2.988.582C4.986%203.18%205%204.704%205%205.574v.5c0-.87-.014-2.394.586-2.992.598-.596%202.118-.582%202.988-.582h14.852c.87%200%202.394-.014%202.992.586.596.598.582%202.118.582%202.988v-.5c0-.87.014-2.39-.582-2.988-.598-.6-2.122-.586-2.992-.586z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22M5%2025.926v.5c0%20.87-.014%202.39.582%202.988.598.6%202.122.586%202.992.586h14.852c.87%200%202.39.014%202.988-.582.6-.598.586-2.122.586-2.992v-.5c0%20.87.014%202.394-.586%202.992-.598.596-2.118.582-2.988.582H8.574c-.87%200-2.394.014-2.992-.586C4.986%2028.316%205%2026.796%205%2025.926z%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22M8.575%202h14.85c.87%200%202.394-.013%202.992.587.596.598.582%202.118.582%202.988v20.85c0%20.87.014%202.395-.586%202.993-.598.596-2.119.582-2.989.582H8.574c-.87%200-2.394.013-2.992-.587C4.986%2028.815%205%2027.295%205%2026.425V5.575c0-.87-.014-2.395.586-2.993C6.184%201.986%207.705%202%208.575%202z%22%20fill%3D%22url(%23n)%22%2F%3E`

  const video = 'M21%2013l-9%205V8zm3-7h2v2h-2zm0%204h2v2h-2zm0%204h2v2h-2zm0%204h2v2h-2zM6%206h2v2H6zm0%204h2v2H6zm0%204h2v2H6zm0%204h2v2H6z'
  const videoMin = 'M21%2013l-9%205V8z'

  const audio = 'M21%206l-8%202v7.27A2%202%200%201014%2017v-7l6-1v5.27A2%202%200%201021%2016z'

  const model = 'M16%207l-6%201.907v7.232L16%2019l6-2.86V8.906zm0%20.948l4.059%201.29L16%2010.528l-4.057-1.292zm-5.098%201.909l4.647%201.477v6.45l-4.647-2.215zm10.196%200v5.712l-4.647%202.216v-6.45z'

  const app = 'M16%207l-6%201.9v7.25L16%2019l6-2.85V8.9zm0%20.925l4.078%201.29L16%2010.508l-4.078-1.291z'

  const image = 'M19.429%206C18.639%206%2018%206.624%2018%207.393c0%20.77.64%201.393%201.429%201.393s1.428-.624%201.428-1.393c0-.77-.64-1.393-1.428-1.393zM14%2010l-4%208h12l-3-6-2%204z'

  const font = 'M12%208v10h2v-4h4v-2h-4v-2h6V8z'

  const text = 'M11%208v1h10V8zm0%203v1h10v-1zm0%203v1h10v-1zm0%203v1h5v-1z'

  const other = 'M13%208l8%208v-4l-4-4zm-2%202v4l4%204h4z'

  const needTitle = extension && extension.length < 6

  let icon = other
  if (type === 'application') icon = app
  else if (type === 'text') icon = text
  else if (type === 'font') icon = font
  else if (type === 'model') icon = model
  else if (type === 'video') icon = needTitle ? video : videoMin
  else if (type === 'audio') icon = audio
  else if (type === 'image') icon = image
  icon = `%3Cpath%20d%3D%22${icon}%22%20fill%3D%22url(%23g)%22%20%2F%3E`

  let title = ''
  if (needTitle) {
    title = `%3Cpath%20d%3D%22M5%2022v4.426c0%20.87-.014%202.39.582%202.988.598.6%202.122.586%202.992.586h14.852c.87%200%202.39.014%202.988-.582.6-.598.586-2.122.586-2.992V22z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.15%22%20%2F%3E%3Ctext%20style%3D%22line-height%3A1%3B-inkscape-font-specification%3A'sans-serif%20Bold'%3Btext-align%3Acenter%3Btext-transform%3Auppercase%3B%22%20x%3D%2216%22%20y%3D%2227.75%22%20font-weight%3D%22400%22%20font-size%3D%225.5%22%20font-family%3D%22sans-serif%22%20text-anchor%3D%22middle%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.95%22%20stroke%3D%22%23fff%22%20stroke-width%3D%220.25%22%3E${encodeURIComponent(extension)}%3C%2Ftext%3E`
  } else {
    icon = `%3Cg%20style%3D%22transform%3Ascale(1.42)%20translate(-15%25%2C%20-5.5%25)%3B%22%3E${icon}%3C%2Fg%3E`
  }

  const end = '%3C%2Fsvg%3E'

  return start + title + icon + end
}
