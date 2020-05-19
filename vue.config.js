const path = require("path")
// import path from 'path'
// import mp from 'svg-sprite-loader-mod/plugin'
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons")

    config.module
      .rule("svg-sprite")
      .test(/\.(svg)(\?.*)?$/)
      .include.add(dir).end()
      .use("svg-sprite-loader-mod").loader("svg-sprite-loader-mod").options({extract: false})
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: "fill"}}]}))
      .end()
    config.plugin("svg-sprite").use(require("svg-sprite-loader-mod/plugin"), [{plainSprite: true}])
    config.module.rule("svg").exclude.add(dir)
  }
}
