import React, { Component } from 'react'
import { View, Text } from 'react-native'

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}

const inputStyle = {
  flex: 1,
  borderRightWidth: 1,
  borderColor: '#e0e0e0',
  height: 40
}
const lastInputStyle = {
  flex: 1,
  height: 40
}
export const Example4 = () => {
  return (
    <View style={{...flexCenter, flex: 1, backgroundColor: '#000', opacity: .5}}>
    	<View style={{height: 150, width: 300, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden', padding: 10}}>
    		<Text style={{textAlign: 'center', color: '#000', fontSize: 20, fontWeight: 'bold', paddingTop: 20, paddingBottom: 20}}>请输入六位交易密码</Text>
    		<View style={{flexDirection : 'row', marginLeft: 20, marginRight: 20, borderWidth: 1, borderColor: '#e0e0e0'}}>
    			<View style={{...inputStyle}}></View>
    			<View style={{...inputStyle}}></View>
    			<View style={{...inputStyle}}></View>
    			<View style={{...inputStyle}}></View>
    			<View style={{...inputStyle}}></View>
    			<View style={{...lastInputStyle}}></View>
    		</View>
    	</View>
		</View>
  )
}
