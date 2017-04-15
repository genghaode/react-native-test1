import React, { Component } from 'react'
import { View, Text, Animated, Easing } from 'react-native'

class _AnimatedNumber extends Component {
  render() {
    const { number, fontStyle, duration, gap } = this.props
    return (
      <View style={{flexDirection:'row'}}>
      	{
      		number.split("").map((item, index)=>{
      			return <ANumber key={index} fontStyle={fontStyle}>{item}</ANumber>
      		})
      	}
      </View>
    )
  }
}


_AnimatedNumber.propTypes = {
  number: React.PropTypes.string,
  fontStyle: React.PropTypes.object,
  duration: React.PropTypes.number,
  gap: React.PropTypes.number

}

class ANumber extends Component {
  constructor(porps) {
    super()
  }
  componentDidMount() {
    Animated.timing(
      this.num, { toValue: 1, easing: Easing.linear }
    ).start()
  }
  render() {
    this.num = new Animated.Value(0)
    return (
      <View style={{flex:1, alignItems: 'center',width:50,height:50}}><Animated.Text style={this.props.fontStyle}>{this.num.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, this.props.children]
                })}</Animated.Text></View>
    )
  }
}

export const AnimatedNumber = _AnimatedNumber
