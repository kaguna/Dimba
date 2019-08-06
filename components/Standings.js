import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Separator, List, ListItem, Content, Body, Right, Text, View } from 'native-base';
import { data } from '../data';

export default class Standings extends React.Component {   

render() {
    return (
        <ScrollView>
            <View style={styles.tableHeader}>
                <View style={{width: 30, }}>
                    <Text style={{fontWeight: 'bold', }}>#</Text>
                </View>
                <View style={{width: 180,}}>
                    <Text style={{fontWeight: 'bold', }}>Teams</Text>
                </View>
                <View style={{width: 30, }}>
                    <Text style={{fontWeight: 'bold', }}>MP</Text>
                </View>
                <View style={{width: 30, }}>
                    <Text style={{fontWeight: 'bold', }}>W</Text>
                </View>
                <View style={{width: 30, }}>
                    <Text style={{fontWeight: 'bold', }}>D</Text>
                </View>
                <View style={{width: 30, }}>
                    <Text style={{fontWeight: 'bold', }}>L</Text>
                </View>
                <View style={{width: 30, }}>
                    <Text style={{fontWeight: 'bold', }}>P</Text>
                </View>
            </View>
            <List>
                {
                [].concat(data.clubs).sort((a, b) => a.position > b.position).map((datum, index) => (
                    <ListItem key={index}>
                        <View style={styles.tableChild}>
                            <View style={{width: 30, }}>
                                <Text>{datum.position}</Text>
                            </View>
                            <View style={{width: 180,}}>
                                <Text>{datum.name}</Text>
                            </View>
                            <View style={{width: 30, }}>
                                <Text>{datum.games_played}</Text>
                            </View>
                            <View style={{width: 30, }}>
                                <Text>{datum.wins}</Text>
                            </View>
                            <View style={{width: 30, }}>
                                <Text>{datum.draws}</Text>
                            </View>
                            <View style={{width: 30, }}>
                                <Text>{datum.losses}</Text>
                            </View>
                            <View style={{width: 30, }}>
                                <Text style={{fontWeight: 'bold', }}>{datum.points}</Text>
                            </View>
                        </View>
                    </ListItem>
                ))}
            </List>
        </ScrollView>
    );
}
}
const styles = StyleSheet.create({
    tableHeader:{
        flex: 1, 
        flexDirection: 'row',
        margin: 16,
        fontWeight: 'bold',
    },
    tableChild:{
        flex: 1, 
        flexDirection: 'row',
    },
    c:{
        backgroundColor: 'yellow',
    }
});
