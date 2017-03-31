import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

export const MyBanner = (props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
    >
    {
      props.children.map((child, i)=>{
        return (
          <View key={i} style={{width: props.width, height: props.height}}>
            {child}
          </View>
        )
      })
    }
    </ScrollView>
  )
}
