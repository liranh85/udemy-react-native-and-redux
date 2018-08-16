import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { CreateStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'

const App = () => {
  return (
    <Provider store={CreateStore(reducers)}>
    <View>
      <Header headerText='Tech Stack' />
    </View>
    </Provider>
  )
}

export default App