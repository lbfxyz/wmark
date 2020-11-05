module.exports = {
  publicPath: './',
  devServer: {
    port: 8200
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // config.when(process.env.NODE_ENV === 'production', config => {
    // config.entry('app').clear().add('./src/main-prod.js')
    // })
    // 在这里设置 需要cdn的依赖和插件
    config.set('externals', {
      'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      // axios: "axios",
      // echarts: "echarts",
      'element-ui': 'Element'
    });
    return config
  },
}
