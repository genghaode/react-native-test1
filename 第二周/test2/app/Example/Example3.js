import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
}

export const Example3 = () => {
  return (
    <View style={{flex: 1, ...flexCenter}}>
			<ActivityIndicator />
		</View>
  )
}
