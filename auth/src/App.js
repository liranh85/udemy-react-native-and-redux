import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBfCOr_pSZrL_cq4X0Lby1na3qr910ub7U',
      authDomain: 'authentication-5377b.firebaseapp.com',
      databaseURL: 'https://authentication-5377b.firebaseio.com',
      projectId: 'authentication-5377b',
      storageBucket: 'authentication-5377b.appspot.com',
      messagingSenderId: '147297045491'
    })
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App