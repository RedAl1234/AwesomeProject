import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Homepage from '../Screens/Homepage.js'

const Stack = createNativeStackNavigator()

class HomeNav extends Component {

  render () {
    
    return (
      <Stack.Navigator>
        <Stack.Screen name='Homepage' component={Homepage} />

      </Stack.Navigator>
    )
  }
}

export default HomeNav