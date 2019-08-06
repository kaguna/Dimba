import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Separator, List, ListItem, Left, Body, Right, Text, View } from 'native-base';

export default class LineUps extends React.Component {

render() {
    return (
        <View style={styles.list}>
            <Left>
                <Text style={styles.names}>Caroline Aaron</Text>
                <Text style={styles.names}>Caroline Aaron</Text>
                <Text style={styles.names}>Caroline Aaron</Text>
                <Text style={styles.names}>Caroline Aaron</Text>
                <Text style={styles.names}>Caroline Aaron</Text>
                <Text style={styles.names}>Caroline Aaron</Text>
                <Text style={styles.names}>Caroline Aaron</Text>
            </Left>
                
            <Right>
                <Text style={styles.names}>Lee Allen</Text>
                <Text style={styles.names}>Lee Allen</Text>
                <Text style={styles.names}>Lee Allen</Text>
                <Text style={styles.names}>Lee Allen</Text>
                <Text style={styles.names}>Lee Allen</Text>
                <Text style={styles.names}>Lee Allen</Text>
                <Text style={styles.names}>Lee Allen</Text>
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
