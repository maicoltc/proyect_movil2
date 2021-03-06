import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

import {Button, Text, TextInput} from '../components'

const App: () => React$Node = () => {
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  const registrar = () => {
    console.log('registrando..., con los valores: ', {valueEmail})
    console.log('registrando ..., con los valores: ', {valuePassword})
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <Text label='Registro' />
          <TextInput
            label='Correo'
            value={valueEmail}
            onChangeText={value => setValueEmail(value)}
          />.
          <TextInput
            label='Contraseña'gradle
            value={valuePassword}
            onChangeText={value => setValuePassword(value)}
          />
          <Button label='Click' onPress={registrar} />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App
