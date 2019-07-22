import React from 'react';
import GameDetails from '../components/GameDetails'
import BackButton from '../components/BackButton'
import { View, Button, Icon } from 'native-base';

export default class GameScreen extends React.Component {
  render() {
    return (
      <View>
        <GameDetails/>
      </View>
    );
  }
}

GameScreen.navigationOptions = {
  header: <BackButton />,
};