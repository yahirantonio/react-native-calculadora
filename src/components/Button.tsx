import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface entry {
  simbolo: number|string,
  typeButton: number,
  onPress(any: any): void,
  value?: number | string
}

export const Button = ({simbolo,typeButton, onPress,value}:entry) => {
  return (
      <TouchableOpacity 
        style={(typeButton === 1)?style.firstButton: (typeButton===2)?style.secondButton:(typeButton===3)?style.thirdButton:style.fourthButton}
        onPress={() => onPress(value)}
      >
        <Text style={style.simbol}>{simbolo}</Text>
      </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  firstButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: 90,
    height: 80,
    borderRadius:100,
    padding: 5,
  },
  secondButton:{
    alignItems: "center",
    backgroundColor: "yellow",
    color:'white',
    width: 90,
    height: 80,
    borderRadius:100,
    padding: 5,
  },
  thirdButton:{
    alignItems: "center",
    backgroundColor: "gray",
    color:'white',
    width: 90,
    height: 80,
    borderRadius:100,
    padding: 5,
  },
  fourthButton:{
    alignItems: "center",
    backgroundColor: "gray",
    color:'white',
    width: 200,
    height: 80,
    borderRadius:100,
    padding: 5,
  },
  simbol:{
    fontSize:50,
    fontWeight:'bold'
  }
})
