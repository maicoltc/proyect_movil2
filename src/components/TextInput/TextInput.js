import React from 'react'
import { TextInput } from 'react-native';

const UselessTextInput = props => {
  const {label} = props 
  console.log('llamando al componente TextInput')
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      style={{ 
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1 
        }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default UselessTextInput;