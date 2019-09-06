import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import MatchesScreen from '../screens/MatchesScreen';
import TabBarIcon from '../components/TabBarIcon';
import CustomHeader from '../components/CustomHeader';

const tabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'All Matches',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon 
              focused={focused} 
              name={Platform.OS === 'ios' 
              ? 'ios-football' 
              : 'md-football'} 
              />
            ),
          },
    },
    NewsTab: {
        screen: NewsScreen,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios'? 'ios-today' : 'md-today'
                }
              />
            ),
          },
    },
    MatchesTab: {
       screen: MatchesScreen,
       navigationOptions: {
        tabBarLabel: 'Standings',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon 
            focused={focused} 
            name={Platform.OS === 'ios' 
            ? 'ios-trophy' 
            : 'md-trophy'}
            />
        ),
      },
    }

  },{
    navigationOptions:{
      header: <CustomHeader title='Dimba' navigationPath = 'HomeTab'/>
    }
});
  
  export default tabNavigator;