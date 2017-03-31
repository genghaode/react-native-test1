import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'


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
      <View>
				<ScrollView
					ref="scrollView"
		    	onScroll={this._onScroll}
		    	scrollEventThrottle={200}
		    >
						<Title>标题</Title>
						<Paragraph>第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字第一段文字</Paragraph>
					<Paragraph>第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字第二段文字</Paragraph>
					<Paragraph>第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字第三段文字</Paragraph>
				</ScrollView>
				{
					this.state.isShowToTop && <TouchableOpacity style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#000', position: 'absolute', bottom: 30, right: 30}} onPress={this._onPress}><Image source={require('./toTop.png')} style={{width: 80, height: 80}} resizeMode='contain'/></TouchableOpacity>
				}
    	</View>
    )
  }
  _onScroll = ({ nativeEvent: { contentOffset: { x, y } } }) => {
    if (y > 0 && this.state.scrollY - y > 0) {
      this.setState({
        scrollY: y,
        isShowToTop: true
      })
    } else {
      this.setState({
        scrollY: y,
        isShowToTop: false
      })
    }

  }
  _onPress = () => {
    this.refs.scrollView.scrollTo({ y: 0 })
  }
}

const Title = (props) => {
  return (
    <View style={{marginTop: 60, marginBottom: 60}}>
			<Text style={{fontSize: 50, color: '#000', textAlign: 'center'}}>{props.children}</Text>
		</View>
  )
}

const Paragraph = (props) => {
  return (
    <View style={{padding: 30}}>
			<Text style={{fontSize: 20, color: '#000', lineHeight: 30}}>{props.children}</Text>
		</View>
  )
}
