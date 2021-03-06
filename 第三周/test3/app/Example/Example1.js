import React, { Component } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native'

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
      isImgShow: true
    }
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      this.setState({
        isImgShow: false
      })
    })
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e) => {
      this.setState({
        isImgShow: true
      })
    })
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        { this.state.isImgShow && <View style={{marginTop: 150}}><Image style={{width: 100, height: 100}} source={require('./test.jpg')} /></View>
        }
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
      </View>
    )
  }

}
