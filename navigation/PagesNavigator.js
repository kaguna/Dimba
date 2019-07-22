import { createStackNavigator } from 'react-navigation';

import GameScreen from '../screens/GameScreen';

const PagesNavigator = createStackNavigator(
  {
    Game: {
        screen: GameScreen,
    },
  });

  PagesNavigator.path = '';



export default PagesNavigator;
