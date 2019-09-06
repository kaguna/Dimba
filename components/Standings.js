import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Badge, List, ListItem, Spinner, Body, Right, Text, View } from 'native-base';

class Standings extends React.Component {
    state = {
        data: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const standingApiCall = await fetch('https://staging-dimba-api.herokuapp.com/api/v1/league/3/season/1/table');
            const table = await standingApiCall.json();
            this.setState({data: table, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    checkPosition = (param) => {
        if(param < 4){
            return <Badge primary><Text>{param + 1}. </Text></Badge>;
        }
        else if(param >= 17) {
            return <Badge danger><Text>{param + 1}. </Text></Badge>;
        }else{
            return <Text>{param + 1}. </Text>;
        }
    };

    render() {
        const { data, loading } = this.state;
        if(!loading){
            return (
                <ScrollView>
                    <View style={styles.tableHeader}>
                        <View style={{width: 25, paddingRight: 5 }}>
                            <Text style={{fontWeight: 'bold', }}>#</Text>
                        </View>
                        <View style={{width: 160,}}>
                            <Text style={{fontWeight: 'bold', }}>Teams</Text>
                        </View>
                        <View style={{width: 30, }}>
                            <Text style={{fontWeight: 'bold', }}>MP</Text>
                        </View>
                        <View style={{width: 25, }}>
                            <Text style={{fontWeight: 'bold', }}>W</Text>
                        </View>
                        <View style={{width: 25, }}>
                            <Text style={{fontWeight: 'bold', }}>D</Text>
                        </View>
                        <View style={{width: 25, }}>
                            <Text style={{fontWeight: 'bold', }}>L</Text>
                        </View>
                        <View style={{width: 45, }}>
                            <Text style={{fontWeight: 'bold', }}>F:A</Text>
                        </View>
                        <View style={{width: 20, }}>
                            <Text style={{fontWeight: 'bold', }}>P</Text>
                        </View>
                    </View>
                    <List>
                        {data[1].map((datum, index) => (
                            <ListItem key={index + 1}>
                                <TouchableOpacity
                                    style={styles.content}
                                    onPress={() => this.props.navigation.navigate('Team',
                                        { team: datum }
                                    )}
                                >
                                    <View style={styles.tableChild}>
                                        <View style={{width: 25}}>
                                            {this.checkPosition(index)}
                                        </View>
                                        <View style={{width: 160,}}>
                                            <Text>{datum.team_name}</Text>
                                        </View>
                                        <View style={{width: 30, }}>
                                            <Text style={styles.numbers}>{datum.games_played}</Text>
                                        </View>
                                        <View style={{width: 25, }}>
                                            <Text style={styles.numbers}>{datum.wins}</Text>
                                        </View>
                                        <View style={{width: 25, }}>
                                            <Text style={styles.numbers}>{datum.draws}</Text>
                                        </View>
                                        <View style={{width: 25, }}>
                                            <Text style={styles.numbers}>{datum.losses}</Text>
                                        </View>
                                        <View style={{width: 45, }}>
                                            <Text style={styles.numbers}>{datum.goals_for}:{datum.goals_against}</Text>
                                        </View>
                                        <View style={{width: 20, }}>
                                            <Text style={styles.numbers}>{datum.points}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ListItem>
                        ))}
                    </List>
                </ScrollView>
            )
        }
        else{
            return(
                <View >
                    <Spinner color='green' />
                </View>
            )
        }
    }
    }
const styles = StyleSheet.create({
    tableHeader:{
        flex: 1, 
        flexDirection: 'row',
        margin: 12,
    },
    tableChild:{
        flex: 1, 
        flexDirection: 'row',
    },
    spinner: {
        paddingTop: 50,
    },
    numbers:{
        fontSize: 16,
    }
});

export default Standings;
