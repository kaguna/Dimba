import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Badge } from 'native-base';

export default class HomeScreen extends React.Component {
  leagues = {
    names: [
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
    ]
 }

alertItemName = (item) => {
  alert(item.name)
}

  render() {
    return ( 

      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Leagues</Text>
        </View>

        <View>
        {
          this.leagues.names.map((item, index) => (
            <TouchableOpacity
                key = {item.id}
                style = {styles.leagues}
                onPress = {() => this.alertItemName(item)}>
              <View style = {styles.row}>
                <Text style = {styles.text}>
                    {item.name}
                </Text>

                {item.liveGames == 0 ? (show =<Text></Text>) : (show =
                  <Badge style = {styles.badge}>
                    <Text style = {styles.games}>{item.liveGames}</Text>
                  </Badge>
                )}
              </View>
            </TouchableOpacity>
          ))
        }
        </View>
      </ScrollView>
    );
  };
}

HomeScreen.navigationOptions = {
  title: 'Standings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    paddingLeft: 20,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  badge:{
    alignItems: 'flex-end',
  },
  games:{
    color: '#ffff',
    fontWeight: 'bold',
  },
  leagues: {
    padding: 20,
    marginTop: 4,
    backgroundColor: '#EEEEEE',
 },
 text: {
    color: '#363D4E',
    fontSize: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
 }
});
