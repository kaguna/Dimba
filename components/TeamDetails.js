import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import { Left, Body, Right,Thumbnail, Text, View } from 'native-base';

export default class TeamDetails extends React.Component {

render() {
    const {teamInfo} = this.props;
return (
    <View style={styles.team}>
        <View style={styles.teamInfo}>
            <View style={styles.nameLogo}>
                <Text style={styles.teamName}>{teamInfo.short_name}</Text>
                <Thumbnail square source={{uri: 'http://wcobhojpur.gov.np/default_images/default-logo.png'}} />
            </View>

            <View style={styles.info}>
                <Text style={styles.details}>Stadium: {teamInfo.stadium}</Text>
                <Text style={styles.details}>capacity: {teamInfo.capacity}</Text>
                <Text style={styles.details}>Manager: {teamInfo.manager}</Text>
                <Text style={styles.details}>Nationality: {teamInfo.manager_nationality}</Text> 
            </View>
        </View>
    </View>
);
}
}
const styles = StyleSheet.create({
    team: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    nameLogo:{
        paddingRight: 18,
    },
    info: {
        paddingTop: 18,
    },
    teamInfo: {
        flexDirection: 'row',
        padding: 10,
    },
    dates: {
        flexDirection: 'column',
    },
    verses: {
        fontSize: 24,
    },
    details: {
        fontSize: 12,
        paddingBottom: 5
    },
    teamName: {
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold',
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
