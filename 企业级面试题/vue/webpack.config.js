const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  //模式，development开发模式，production生产模式
  mode: 'development',
  //入口
  entry: './app/main.js',
  //出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //监听文件
  watch: true,
  //loader能够使webpack识别更多的
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      include: [path.resolve(__dirname, 'app')]
    }]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }
}