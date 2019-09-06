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
import { Navigation } from 'react-navigation';
const matches = [
  {
    fixtureId: 1,
    homeTeam: 'Chelsea', 
    awayTeam: 'Manchester United',
    time: '6:00pm',
  }, 
  {
    fixtureId: 2,
    homeTeam: 'Watford',
    awayTeam: 'Leicester',
    time: '6:00pm',
  }, 
  {
    fixtureId: 3,
    homeTeam: 'Watford',
    awayTeam: 'Leicester',
    time: '6:00pm',
  }, 
  {
    fixtureId: 4,
    homeTeam: 'Watford',
    awayTeam: 'Leicester',
    time: '6:00pm',
  }, 
  {
    fixtureId: 5,
    homeTeam: 'Watford',
    awayTeam: 'Leicester',
    time: '6:00pm',
  }, 
  {
    fixtureId: 6,
    homeTeam: 'Watford',
    awayTeam: 'Leicester',
    time: '6:00pm',
  }
];

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
       {
          id: 2,
          name: 'Asian Cup',
          liveGames: 0,
       },
       {
          id: 3,
          name: 'Copa del Rey',
          liveGames: 13,
       },
       {
          id: 4,
          name: 'Coppa Italia',
          liveGames: 0,
       },
       {
          id: 5,
          name: 'Serie A',
          liveGames: 8,
       },
       {
          id: 6,
          name: 'African Cup',
          liveGames: 3,
       },
       {
          id: 7,
          name: 'UEFA',
          liveGames: 0,
       },
       {
          id: 8,
          name: 'Carabao Cup',
          liveGames: 4,
       },
       {
          id: 9,
          name: 'Laliga',
          liveGames: 12,
       },
       {
          id: 10,
          name: 'Bundesliga',
          liveGames: 0,
       }
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
        {item.liveGames == 0 ? (show =<Text></Text>) : (show =
        <View style = {styles.badge}>
          <Badge>
            <Text style = {styles.games}>{item.liveGames}</Text>
          </Badge>
        </View>
        )}
      </Right>
    </View>
  );
}
_renderContent(item) {
  return (
    <List style={styles.divider}>
      {
        matches.map((item, index) => (
          <ListItem key = {item.fixtureId}>
            <TouchableOpacity
                style={styles.content}
                onPress={() => this.props.navigation.navigate('GameDetailsScreen')}
                >
              <Left style={{ flexDirection: "column", }}>
                <Text style={styles.teams}>{item.homeTeam}*</Text>
                <Text note>{item.awayTeam}</Text>
              </Left>

              <Right>
              <Text style={styles.teams}>4</Text>
              <Text note>2</Text>
                {/* <Text note>{item.time}</Text> */}
              </Right>
              
            </TouchableOpacity>
          </ListItem>
      ))
      }
      </List>
  );
}
render() {
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
  title: 'Matches',
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
  teams: {
    paddingBottom: 10,
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
});