import React from 'react';
import { Platform } from 'react-native';
import GameScreen from '../screens/GameScreen'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });

const GameStack = createStackNavigator(
  {
    Game: { screen: GameScreen },
  },
);

// GameStack.path = '';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Home: GameStack
  })
);
