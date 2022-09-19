import rollupLivereload from 'rollup-plugin-livereload'

export const livereload = (...a) => {
  const lr = rollupLivereload(a)
  return {
    name          : lr.name,
    generateBundle: lr.generateBundle,
    // eslint-disable-next-line consistent-return
    async renderChunk(code, { fileName }) {
      if (fileName === 'index.js') return await lr.banner() + code
    }
  }
}
