import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { AnimatedNumber } from 'Example/AnimatedNumber'

export class Example2 extends Component {
  constructor(props) {
    super()
    this.state = {
      scrollY: 0,
      isShowToTop: false
    }
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <AnimatedNumber
          number="1234"
          fontStyle={{color : 'orange', fontSize : 48, fontWeight : 'bold'}}
          duration={600}
          gap={500}
        />
      </View>

    )
  }
}
