import React, { Component } from 'react'
import { ViewPagerAndroid, View } from 'react-native'

export const MyBanner = (props) => {
  return (
    <ViewPagerAndroid
      initialPage={0}
      style={{width: props.width, height: props.height}}
    >
    {
      props.children.map((child, i)=>{
        return (
          <View key={i}>
            {child}
          </View>
        )
      })
    }
    </ViewPagerAndroid>
  )
}
