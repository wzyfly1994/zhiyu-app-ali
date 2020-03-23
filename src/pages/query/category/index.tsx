import Taro, { Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
// import Taro, { Component } from '@tarojs/taro';
// import { View, Text, Image } from '@tarojs/components';


export default class Welcome extends Component {
    
    // getValue(){
    //     return {
    //         name:'值'
    //     }
    // }

    // static defaultProps = {
    //     names: String,
    //   };

    // constructor(props) {
    //     super(props);
   
    //   }

    // static defaultProps = {
    //     name: '111'
    //   }
    //    defaultProp = {
    //     name: String
    //   };

    render() {
        //const { name } = this.props as any;
        return <View>Hello, {this.props.name}</View>
    }
}