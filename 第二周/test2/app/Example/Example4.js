import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}

const inputStyle = {
  flex: 1,
  borderColor: '#e0e0e0',
  height: 40
}

export const Example4 = () => {
  return (
    <View style={{flex: 1, ...flexCenter}}>
      <BgView />
      <TipsView />
    </View>
  )
}

const BgView = () => {
  return (
    <View style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000', opacity: .5}}></View>
  )
}

const TipsView = () => {
  return (
    <View style={{height: 150, width: Dimensions.get('window').width-60, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden', padding: 10}}>
      <Text style={{textAlign: 'center', color: '#000', fontSize: 20, fontWeight: 'bold', paddingTop: 20, paddingBottom: 20}}>请输入六位交易密码</Text>
      <View style={{flexDirection : 'row', marginLeft: 20, marginRight: 20, borderWidth: 1, borderColor: '#e0e0e0'}}>
      {
        [1,2,3,4,5,6,].map((item, i)=> {
          return (
            <View key={i} style={{...inputStyle, borderRightWidth: i>4?0:1}}></View>
          )
        })
      }
      </View>
    </View>
  )
}
