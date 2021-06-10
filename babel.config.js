module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/picker.scss')      //你的.scss文件所在目录
      ]
    }
  }
}
