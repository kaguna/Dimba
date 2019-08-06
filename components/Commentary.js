import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Separator, List, ListItem, Left, Body, Right, Text, View } from 'native-base';

export default class Commentary extends React.Component {

render() {
    const {match} = this.props;
    return (
        <View style={styles.list}>
            <Left>
                {match.home_team_scorers.map((event, index) =>
                    <Text key = {index} style={styles.names}>{event}</Text> 
                )}
            </Left>
                
            <Right>
                {match.away_team_scorers.map((event, index) =>
                    <Text key = {index} style={styles.names}>{event}</Text> 
                )}
            </Right>
        </View>
    );
}
}
const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        padding: 20,
    },
    names: {
        paddingBottom: 20,
    },
    dash: {
        fontSize: 26,
    },
    dateText: {
        fontSize: 10,
    },
    details: {
        paddingTop: 10,
    },
    goals: {
        flexDirection: 'row',
    },
    live: {
        color: 'red',
        fontSize: 34,
        fontWeight: 'bold',
    },
    time: {
        color: 'red',
        fontSize: 10,
    }
});
