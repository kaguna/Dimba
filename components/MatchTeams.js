import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import { Left, Body, Right,Thumbnail, Text, View } from 'native-base';

export default class MatchTeams extends React.Component {

render() {
    const {match} = this.props;
return (
    <View style={styles.teams}>
        <Left>
            <Thumbnail square source={{uri: 'http://wcobhojpur.gov.np/default_images/default-logo.png'}} />
            <Text style={styles.details}>{match.home_team}</Text>
        </Left>

        <View style={styles.dates}>
            <Text style={styles.dateText}>{match.date+" "+match.local_time}</Text>
            {/* <Body>
                <Text style={styles.verses}> VS </Text>
            </Body> */}

            <Body>
                <View style={styles.goals}>
                    <Text style={styles.live}>{match.home_team_goals}</Text>
                    <Text style={styles.live}> - </Text>
                    <Text style={styles.live}> {match.away_team_goals}</Text>
                </View>
                <Text style={styles.time}> Full Time </Text>
            </Body>
        </View>
            
        <Right>
            <Thumbnail square source={{uri:'http://wcobhojpur.gov.np/default_images/default-logo.png'}} />
            <Text style={styles.details}>{match.away_team}</Text>
        </Right>
    </View>
);
}
}
const styles = StyleSheet.create({
    teams: {
    flexDirection: 'row',
    padding: 20,
    },
    dates: {
    flexDirection: 'column',
    },
    verses: {
        fontSize: 24,
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
        fontSize: 34,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 10,
    }
});
