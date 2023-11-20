import { View, Text, StatusBar } from 'react-native'
import React from 'react'


export default function ScreenWrapper({children}) {
    let statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 30;
  return (
    <View style={{paddingTop:statusBarHeight}} className="flex-1">
      {
        children
      }
    </View>
  )
}