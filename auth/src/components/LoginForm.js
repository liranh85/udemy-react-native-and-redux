import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import{ Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress () {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail () {
    this.setState({ error: 'Authentication failed', loading: false })
  }

  onLoginSuccess () {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  renderButton () {
    if (this.state.loading) {
      return <Spinner size='small' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            onChangeText={email => this.setState({ email })}
            placeholder='user@gmail.com'
            value={this.state.email}
          />
        </CardSection>
        
        <CardSection>
          <Input
            label='Password'
            onChangeText={password => this.setState({ password })}
            placeholder='password'
            secureTextEntry
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm