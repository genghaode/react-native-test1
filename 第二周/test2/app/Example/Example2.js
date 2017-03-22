import React, { Component } from 'react'
import { View, Text } from 'react-native'

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}

const boxStyle = {
  flex: 1,
  backgroundColor: '#666',
  ...flexCenter
}
const cellStyle = {
  height: 100,
  width: 300,
  flexDirection: 'row'
}
const textStyle = {
  color: '#000099',
  fontSize: 30,
  fontWeight: 'bold'
}
const borderBottomStyle = {
  borderBottomWidth: 1,
  borderColor: '#797979'
}
const borderLeftStyle = {
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderColor: '#797979'
}

export const Example2 = () => {
  return (
    <View style={{flex: 1, ...flexCenter}}>
				<View style={{...cellStyle, ...borderBottomStyle}}>
					<View style={{...boxStyle}}><Text style={{...textStyle}}>1</Text></View>
					<View  style={{...boxStyle, ...borderLeftStyle}}><Text style={{...textStyle}}>2</Text></View>
					<View style={{...boxStyle}}><Text style={{...textStyle}}>3</Text></View>
				</View>
				<View style={{...cellStyle, ...borderBottomStyle}}>
					<View style={{...boxStyle}}><Text style={{...textStyle}}>4</Text></View>
					<View style={{...boxStyle, ...borderLeftStyle}}><Text style={{...textStyle}}>5</Text></View>
					<View style={{...boxStyle}}><Text style={{...textStyle}}>6</Text></View>
				</View>
				<View style={{...cellStyle}}>
					<View style={{...boxStyle}}><Text style={{...textStyle}}>7</Text></View>
					<View style={{...boxStyle, ...borderLeftStyle}}><Text style={{...textStyle}}>8</Text></View>
					<View  style={{...boxStyle}}><Text style={{...textStyle}}>9</Text></View>
				</View>
		</View>
  )
}
