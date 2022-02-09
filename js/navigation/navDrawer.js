import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeNav from './navHome'

const Drawer = createDrawerNavigator()

class DrawerNav extends Component {

  render() {

    return (
      
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeNav} />
      </Drawer.Navigator>
    )
  }
}

export default DrawerNav