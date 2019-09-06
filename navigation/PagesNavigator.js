import { createStackNavigator } from 'react-navigation';

import GameScreen from '../screens/GameScreen';
import TeamScreen from '../screens/TeamScreen';
import HomeScreen from '../screens/HomeScreen';
import FixturesScreen from '../screens/FixturesScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const PagesNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Fixtures: {
      screen: FixturesScreen,
    },
    Game: {
        screen: GameScreen,
    },
    Team: {
      screen: TeamScreen,
    },
  });

  PagesNavigator.path = '';



export default PagesNavigator;
