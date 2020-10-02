import React from 'react'
import {Text} from 'react-native'

const CustomText = props => {
  const {label} = props
  console.log('llamdno al componnete text')

  return <Text>{label}</Text>
}

export default CustomText
