module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      preload: {
        renderer: 'src/electron/renderer.ts',
        main: 'src/electron/main.ts'
      }
    }
  }
}
