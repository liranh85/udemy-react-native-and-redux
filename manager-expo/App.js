import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './src/reducers'
import Router from './src/Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD2SvzWHz6sAtg8KIjOM14ON56VT6sNduo',
      authDomain: 'manager-e616b.firebaseapp.com',
      databaseURL: 'https://manager-e616b.firebaseio.com',
      projectId: 'manager-e616b',
      storageBucket: 'manager-e616b.appspot.com',
      messagingSenderId: '627606483830'
    }
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
