import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import PagesNavigator from './PagesNavigator';
import TopTabNavigator from '../components/GameDetails';



export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

    Main: MainTabNavigator,
    Game: PagesNavigator,
    // GameDetails: TopTabNavigator
  })
);
