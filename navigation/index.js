import { createStackNavigator } from 'react-navigation';

import BottomTabNavigator from './BottonTabNavigator';
import GameDetailsScreen from '../screens/GameDetails';

export default createStackNavigator({
    MainScreen: BottomTabNavigator,
    GameDetailsScreen: GameDetailsScreen
  })

