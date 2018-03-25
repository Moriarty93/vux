// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    //主要解决@import引入路径问题 可以使用本地文件、node_modules...
    "postcss-import": {},
    //图片路径字体路径等，vue-loader已经有此功能
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {
    //   // browsers: ['last 20 versions']
    // }
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    //可以使用css未来的特性
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 视窗宽度，设计稿大小
      viewportHeight: 1334, // 视窗高度，可不设，默认1334
      unitPrecision: 3, // 指定px转换vw单位的小数精度，保留3位小数
      viewportUnit: 'vw', // 指定转换单位，建议vw
      selectorBlackList: ['.ignore', '.hairlines', /weui/], // 指定不转换的类名 可以用正则过滤第三方
      minPixelValue: 1, // 小于或等于1px不转换
      mediaQuery: false // 允许在媒体查询中转换
    },
    'postcss-viewport-units': {},
    //主要用来压缩和清理css代码，早webpack中cssnano和css-loader捆绑在一起，但也可以显示使用
    'cssnano': {
      preset: 'advanced',
      //已经集成了，关闭重复调用
      autoprefixer: false,
      // 会默认设置z-index为1，要关闭
      'postcss-zindex': false
    }
  }
}
