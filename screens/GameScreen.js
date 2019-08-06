import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import GameDetails from '../components/GameDetails'
import HeaderDetails from '../components/HeaderDetails'
import MatchTeams from '../components/MatchTeams'

export default class GameScreen extends React.Component {

  render() {
    const match = this.props.navigation.dangerouslyGetParent().getParam('match');
    return (
      <ScrollView>
        <MatchTeams
          match={match}
        />
        <GameDetails
          match={match}
        />
      </ScrollView>
    );
  }
}

GameScreen.navigationOptions = {
  header: <HeaderDetails />,
};
