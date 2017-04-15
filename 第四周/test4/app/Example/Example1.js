import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Keyboard, Animated } from 'react-native'

const inputWrapStyle = {
  marginTop: 50,
  width: 200,
  borderBottomWidth: 1,
  height: 30
}

const BuutonWrapStyle = {
  marginTop: 50,
}

export class Example1 extends Component {
  constructor(props) {
    super()
    this.state = {
      fadeAnimate: new Animated.Value(1)
    }
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      Animated.timing(this.state.fadeAnimate, { toValue: 0 }).start()
      Animated.timing(this.anim, { toValue: -1 }).start()
    })
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e) => {
      Animated.timing(this.state.fadeAnimate, { toValue: 1 }).start()
      Animated.timing(this.anim, { toValue: 0 }).start()
    })
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  render() {
    this.anim = new Animated.Value(0)
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Animated.View style={{marginTop: 150, opacity: this.state.fadeAnimate}}><Image style={{width: 100, height: 100}} source={require('./test.jpg')} /></Animated.View>
        <Animated.View style={{transform:[{
          translateY: this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 250]
          })
        }],flex: 1, alignItems: 'center'}}>
          <View style={{...inputWrapStyle}}>
            <TextInput placeholder="请输入用户名" style={{textAlign: 'center', flex: 1}} />
          </View>
          
          <View  style={{...inputWrapStyle}}>
            <TextInput style={{textAlign: 'center', flex: 1}} secureTextEntry={true} placeholder="请输入密码" />
          </View>
          <View style={{...BuutonWrapStyle}}>
            <TouchableOpacity style={{width: 100, height:30, backgroundColor: '#999',alignItems: 'center', justifyContent: 'center', shadowOffset:{width: 2,  
                    height: 2,  
                  },  
                  shadowColor: '#000',  
                  shadowOpacity: 1}}><Text>登录</Text></TouchableOpacity>
          </View>
        </Animated.View>
        
      </View>
    )
  }

}
