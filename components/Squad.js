import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Separator, List, ListItem, Left, Body, Right, Text, View } from 'native-base';

export default class Squad extends React.Component {

render() {
    const {match} = this.props;
    return (
        <View style={styles.list}>
            <Left>
                <Text  style={styles.names}>dsfsdf</Text> 
            </Left>
                
            <Right>
                {/* {match.away_team_scorers.map((event, index) => */}
                <Text  style={styles.names}>sdfdsfd</Text> 
                {/* )} */}
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
