import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, } from 'react-native';
import { Container, Content, ListItem, Right, List, Badge, Spinner, Left, Body, } from 'native-base';
import SearchField from '../components/SearchField';
import HeaderDetails from '../components/HeaderDetails'
import PickDate from '../components/PickDate';
import Moment from 'moment';

export default class HomeScreen extends React.Component {

  static navigationOptions = () => {
    const title = 'Matches'
    return {
        header: <HeaderDetails title={ title } screen='Home' />,
    }
};

  state = {
    leagues: [],
    loading: true
  }

  async componentDidMount() {
      try {
          const url = 'http://127.0.0.1:3000'
          const leaguesApiCall = await fetch(url+'/api/v1/leagues');
          const leagues = await leaguesApiCall.json();
          this.setState({leagues: leagues, loading: false});
      } catch(err) {
          console.log("Error fetching data-----------", err);
      }
  }

  render() {
    const { leagues, loading } = this.state;
    if(!loading){
      return (
        <Container>
          <SearchField/>
          <Content>
            <List>
              {
                leagues.map((league, index) => (
                  // league.fixtures.length == 0 ? <Text key={index}></Text> :
                  <ListItem key={index}>
                    <TouchableOpacity
                        style={styles.leagueContent}
                        onPress={() =>  this.props.navigation.navigate('Fixtures',
                        { fixtures: league.fixtures, leagueName: league.title }
                        )}
                        > 
                      <Left>
                        <Text style={styles.leagueTitle}>{league.title}</Text>
                      </Left>
                      <Right>
                        {
                          league.fixtures.length == 0 ? <Text></Text> :
                          <Badge>
                            <Text style={styles.matches}>{league.fixtures.length}</Text>
                          </Badge>
                        }
                      </Right>
                    </TouchableOpacity>
                  </ListItem> 
                ))
              }
            </List>
          </Content>
        </Container>
    );
    }else{
      return(
        <View >
            <Spinner color='green' />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  leagueTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  matches: {
    color: '#ffff',
  },
  leagueContent: {
    flexDirection: "row",
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