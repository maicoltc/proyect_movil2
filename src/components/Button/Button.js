import React from 'react'
import {TouchableOpacity} from 'react-native'

// ? components
import {Text} from '../index'

const CustomButton = props => {
  const {label} = props // destructuring
  console.log('llamando al componente bton')
  return (
    <TouchableOpacity
      style={{
        height: 80,
        width: 200,
        backgroundColor: 'orange',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text label={label} />
    </TouchableOpacity>
  )
}

export default CustomButton
