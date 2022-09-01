export default (): void => {
  if (window.getSelection) {
    // @ts-ignore
    if (window.getSelection().empty) { // Chrome
    // @ts-ignore
      window.getSelection().empty()
    // @ts-ignore
    } else if (window.getSelection().removeAllRanges) { // Firefox
    // @ts-ignore
      window.getSelection().removeAllRanges()
    }
    // @ts-ignore
  } else if (document.selection) { // IE?
    // @ts-ignore
    document.selection.empty()
  }
}
