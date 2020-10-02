import React from 'react'
import {TextInput, View} from 'react-native'

import {Text} from '../'

const CustomTextInput = props => {
  const {label, value, onChangeText} = props
  console.log('llamando al componente TextInput')

  return (
    <View>
      <Text label={label} />
      <TextInput
        placeholder='Digita porfavor tu correo'
        placeholderTextColor='red'
        value={value}
        style={{
          height: 60,
          borderColor: 'gray',
          borderWidth: 1,
          marginHorizontal: 20,
          borderRadius: 4,
        }}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  )
}

export default CustomTextInput
