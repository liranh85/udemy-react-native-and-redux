import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Button, CardSection, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBfCOr_pSZrL_cq4X0Lby1na3qr910ub7U',
      authDomain: 'authentication-5377b.firebaseapp.com',
      databaseURL: 'https://authentication-5377b.firebaseio.com',
      projectId: 'authentication-5377b',
      storageBucket: 'authentication-5377b.appspot.com',
      messagingSenderId: '147297045491'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent () {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App