import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import MatchTeams from '../components/MatchTeams'
import { Badge } from 'native-base';

export default class HomeScreen extends React.Component {
  render() {
    return ( 
      <MatchTeams />
    );
  };
}

HomeScreen.navigationOptions = {
  title: 'Standings',
};
