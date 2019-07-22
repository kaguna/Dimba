import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import MatchesScreen from '../screens/MatchesScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'All Matches',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-football' : 'md-football'} />
  ),
};

HomeStack.path = '';

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'? 'ios-today' : 'md-today'
      }
    />
  ),
};

NewsStack.path = '';

const MatchesStack = createStackNavigator(
  {
    Matches: MatchesScreen,
  },
  config
);

MatchesStack.navigationOptions = {
  tabBarLabel: 'Standings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} />
  ),
};

MatchesStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NewsStack,
  MatchesStack,
});

tabNavigator.path = '';



export default tabNavigator;
