import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { 
  Container, 
  Content,
  ListItem,
  Right,
  List,
  Badge, Accordion, Left, Body, } from 'native-base';
import SearchField from '../components/SearchField';
import PickDate from '../components/PickDate';
import Moment from 'moment';
import { data } from '../data';

const dataArray = [
      {
        id: 0,
        name: 'English Premier League',
        liveGames: 12,
      },
      {
        id: 1,
        name: 'DFB Pokal',
        liveGames: 10,
      },
    ];


export default class MatchesScreen extends React.Component {

alertItemName = (item) => {
  alert(item.name)
}

_renderHeader(item, expanded) {
  return (
    <View style={styles.leagues}>
      {/* {expanded
        ? <Icon style={{ fontSize: 20 }} name="arrow-up" />
        : <Icon style={{ fontSize: 20 }} name="arrow-down" />} */}
      
        <Text style={styles.title}>
          {item.name}
        </Text>

      <Right>
        <View style = {styles.badge}>
          <Badge>
            <Text style = {styles.games}>{data.season_fixtures[1].fixtures.length}</Text>
          </Badge>
        </View>
      </Right>
    </View>
  );
}
_renderContent(item) {
  return (
    <List style={styles.divider}>
      {
        data.season_fixtures[1].fixtures.map((item, index) => (
          <ListItem key = {item.id}>
            <TouchableOpacity
                style={styles.content}
                onPress={() => this.props.navigation.navigate('Game',
                { match:item }
                )}
                >
              <Left style={styles.flexDirectionRow}>
                <Text style={homeTeamWon(item) ? styles.homeTeam : ""}>{item.home_team}</Text>
                <Text style={awayTeamWon(item) ? styles.awayTeam : ""}>{item.away_team}</Text>
              </Left>

              <Right>
              <Text style={homeTeamWon(item) ? styles.homeTeam : ""} >{item.home_team_goals}</Text>
              <Text style={awayTeamWon(item) ? styles.awayTeam : ""}>{item.away_team_goals}</Text>
                {/* <Text note>{Moment(item.local_time).format(' hh:mm:ss a')}</Text> */}
              </Right>
              
            </TouchableOpacity>
          </ListItem>
      ))
      }
      </List>
  );
}
render() {

  homeTeamWon = (item) => {
    return item.home_team_goals > item.away_team_goals
  };

  awayTeamWon = (item) => {
    return item.away_team_goals > item.home_team_goals
  };

  return (
    <Container>
      <SearchField/>
      <Content padder>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={this._renderHeader}
          renderContent={() => this._renderContent()}
        />
      </Content>
    </Container>
  );
}
}

MatchesScreen.navigationOptions = {
  header: <PickDate />,
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 10,
  },
  leagues: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  homeTeam: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  awayTeam: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: "row",
    padding: 5,
  },
  badge: {
    alignItems: 'center'
  },
  games:{
    color: '#ffff',
    fontWeight: 'bold',
  },

  flexDirectionRow: {
    flexDirection: "column"
  }
});