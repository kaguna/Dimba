import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import { Left, Body, Right,Thumbnail, Text, View } from 'native-base';

export default class MatchTeams extends React.Component {

render() {
    const {team} = this.props;
return (
    <View style={styles.teams}>
        <Left>
            <View style={styles.infoColumn}>
                <Thumbnail square source={{uri: 'http://wcobhojpur.gov.np/default_images/default-logo.png'}} />
                <Text style={styles.details}>{team.match.home_team[1]}</Text>
            </View>
        </Left>

        <View style={styles.infoColumn}>
            <Text style={styles.dateText}>{team.match.match_day}</Text>
            {team.match.results.length == 0 ?
                <Body>
                    <Text style={styles.verses}> VS </Text>
                </Body> :

                <Body>
                    <View style={styles.goals}>
                        <Text style={styles.live}>{team.match.results.home_team.goals_for}</Text>
                        <Text style={styles.live}> - </Text>
                        <Text style={styles.live}> {team.match.results.away_team.goals_for}</Text>
                    </View>
                    <Text style={styles.time}> Full Time </Text>
                </Body>
            }
            </View>
        <Right>
            <View style={styles.infoColumn}>
                <Thumbnail square source={{uri:'http://wcobhojpur.gov.np/default_images/default-logo.png'}} />
                <Text style={styles.details}>{team.match.away_team[1]}</Text>
            </View>
        </Right>
    </View>
);
}
}
const styles = StyleSheet.create({
    teams: {
        flexDirection: 'row',
        padding: 10,
    },
    infoColumn: {
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
