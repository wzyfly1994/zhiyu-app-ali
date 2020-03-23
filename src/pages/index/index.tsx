import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import shipping from '../../resources/icon/smallIco/you.png'
import flash from '../../resources/icon/smallIco/flash.png'
import fang from '../../resources/icon/smallIco/fang.png'
import rec from '../../resources/icon/smallIco/rec.png'
import like from '../../resources/icon/smallIco/like.png'
import news from '../../resources/icon/smallIco/diamond.png'
import re01 from '../../resources/items/1001.png'
import re02 from '../../resources/items/1002.png'
import { AtDivider } from 'taro-ui'
import Welcome from '../query/category'


export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#e3b4b8'
          vertical={false}
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <Image
              className='swiper-img'
              src='../../resources/img/1.png'
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className='swiper-img'
              src='../../resources/img/4.png'
            />
          </SwiperItem>
        </Swiper>

        <View className='feature'>
          <View>
            <Image className='feature-ico' src={shipping} />
            全场包邮
          </View>
          <View>
            <Image className='feature-ico' src={flash} />
            先行赔付
          </View>
          <View>
            <Image className='feature-ico' src={fang} />
            7天无理由
          </View>
          <View>
            <Image className='feature-ico' src={rec} />
            优先退款
          </View>
        </View>
        <AtDivider height='10' />

        <View className='title-items-list'>
          <View className='title-tag'>
            <Image className='title-ico' src={like} />
            推荐商品
          </View>
        </View>

        <View className='scroll-rec-items'>
        <Image className='items-cover' src={re01} />
        <Image className='items-cover' src={re02} />
        <Image className='items-cover' src={re01} />
        <Image className='items-cover' src={re02} />
        </View>

        <AtDivider height='15' />

        <View className='title-items-list'>
          <View className='title-tag'>
            <Image className='title-ico' src={news} />
            新品上新
          </View>
        </View>

        <Welcome name='55555'></Welcome>
      </View>
    )
  }
}
