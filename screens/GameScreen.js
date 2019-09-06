import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import GameDetails from '../components/GameDetails'
import HeaderDetails from '../components/HeaderDetails'
import MatchTeams from '../components/MatchTeams'

export default class GameScreen extends React.Component {
  static navigationOptions = () => {
    return {
      header: <HeaderDetails title='Matches' screen='Fixtures' />,
    }
};

  render() {
    const { game } = this.props.navigation.state.params
    return (
      <ScrollView>
        <MatchTeams
          team={game}
        />
        <GameDetails
          match={game}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}
