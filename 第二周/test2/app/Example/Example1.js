import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}

export const Example1 = () => {
  return (
    <View style={{flex: 1}}>
    	<View style={{height: 44, ...flexCenter, backgroundColor: '#0099ff'}}>
    		<Text style={{color: '#fff'}}>标题栏</Text>
    	</View>
			<View style={{flex: 1, ...flexCenter, backgroundColor: '#ccc'}}>
				<Image 
					source={require('./test.jpg')} 
					style={{width: 50, height: 50}}
				/>
			</View>
			<View style={{height: 48, flexDirection: 'row', borderWidth: 1, borderColor: '#787878'}}>
				<View  style={{flex: 1,...flexCenter}}><Text>探索</Text></View>
				<View style={{flex: 1,...flexCenter}}><Text>学习</Text></View>
				<View style={{flex: 1,...flexCenter}}><Text>进步</Text></View>
			</View>
		</View>
  )
}
