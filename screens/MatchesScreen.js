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
