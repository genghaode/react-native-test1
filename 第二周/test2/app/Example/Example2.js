import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
const W = Dimensions.get('window').width
const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}
const boxW = (W - 60) / 3
const boxStyle = {
  width: boxW,
  height: boxW,
  backgroundColor: '#666',
  ...flexCenter
}

const textStyle = {
  color: '#000099',
  fontSize: 30,
  fontWeight: 'bold'
}


export const Example2 = () => {
  return (
    <View style={{flex: 1,...flexCenter }}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1, borderColor: '#797979' }}>
        {
          [1,2,3,4,5,6,7,8,9].map((item, i)=> {
            console.log(i%6)
            return (
              <View key={i} style={{...boxStyle, borderLeftWidth:i%3 !=0?1:0, borderBottomWidth: i>6?0:1, borderColor: '#797979'}}><Text style={{...textStyle}}>{item}</Text></View>
            )
          })
        }
      </View>      
    </View>

  )
}
