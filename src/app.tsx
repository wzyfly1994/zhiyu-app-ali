import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f0a1a8',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: 'black',
      backgroundColor: 'white',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './resources/icon/tabBar/index.png',
        selectedIconPath: './resources/icon/tabBar/index-sel.png'
      },
      {
        pagePath: 'pages/index/indexsss',
        text: '分类',
        iconPath: './resources/icon/tabBar/category.png',
        selectedIconPath: './resources/icon/tabBar/category-sel.png'
      },
      {
        pagePath: 'pages/index/indexsss111',
        text: '购物车',
        iconPath: './resources/icon/tabBar/shopping-car.png',
        selectedIconPath: './resources/icon/tabBar/shopping-car-sel.png'
      },
      {
        pagePath: 'pages/index/indexsss3333',
        text: '我的',
        iconPath: './resources/icon/tabBar/mine.png',
        selectedIconPath: './resources/icon/tabBar/mine-sel.png'
      }
      ],
      borderStyle: "white"
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
