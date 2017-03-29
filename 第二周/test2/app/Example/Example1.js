import React, { Component } from 'react'
import { View, Text, Image, Platform } from 'react-native'

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}

export const Example1 = () => {
  return (
    <View style={{flex: 1}}>
    	<Header />
			<View style={{flex: 1, ...flexCenter, backgroundColor: '#ccc'}}>
				<Image 
					source={require('./test.jpg')} 
					style={{width: 50, height: 50}}
				/>
			</View>
			<Footer />
		</View>
  )
}

const Header = () => {
  return (
    <View style={{height: Platform.OS == 'ios'?64:44, ...flexCenter, backgroundColor: '#0099ff'}}>
  		<Text style={{color: '#fff', marginTop: Platform.OS == 'ios'?20:0}}>标题栏</Text>
  	</View>
  )
}

const Footer = () => {
  const data = ['探索', '学习', '进步']

  return (
    <View style={{height: 48, flexDirection: 'row', borderWidth: 1, borderColor: '#787878'}}>
    {
    	data.map((item, i)=> {
    		return (
    			<View  style={{flex: 1,...flexCenter}} key={i}><Text>{item}</Text></View>
    		)
    	})
    }
		</View>
  )
}
