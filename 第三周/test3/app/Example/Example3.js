import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { MyBanner } from '../MyBanner'

export const Example3 = () => {
  return (
    <MyBanner
    	height={200}
    	width={Dimensions.get('window').width}
    >
			<View style={{flex: 1,backgroundColor: 'red'}}>
				<Text>1</Text>
			</View>	
			<View style={{flex: 1,backgroundColor: 'blue'}}>
				<Text>2</Text>
			</View>	
		</MyBanner>
  )
}
