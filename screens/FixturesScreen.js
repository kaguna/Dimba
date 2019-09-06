import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, } from 'react-native';
import { Container, ListItem, Right, List, Left } from 'native-base';

import HeaderDetails from '../components/HeaderDetails'


export default class FixturesScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.state.params.leagueName
        return {
            header: <HeaderDetails title={ title } screen='Home' />,
        }
    };
    render(){
        const { fixtures } = this.props.navigation.state.params;
        homeTeamWon = (results) => {
            results = results.home_team.goals_for > results.away_team.goals_for
            star = "*"
            return [results, star]
        };
        
        awayTeamWon = (results) => {
            results = results.away_team.goals_for > results.home_team.goals_for
            star = "*"
            return [results, star]
        };

        return(
            <Container>
                { fixtures.length == 0 ? 
                <View style={styles.noMatches}><Text>No Matches</Text></View> :
                <ScrollView>
                    <List style={styles.divider}>
                        {
                            fixtures.map((fixture, index) => (
                                <ListItem key={index}>
                                    <TouchableOpacity
                                        style={styles.content}
                                        onPress={() => this.props.navigation.navigate('Game',
                                        { game: fixture }
                                        )}
                                        >
                                    <Left style={styles.flexDirectionRow}>
                                        <View>
                                            <Text style={homeTeamWon(fixture.match.results)[0] ? styles.homeTeam : ""}>
                                                {fixture.match.home_team[1]} 
                                                {homeTeamWon(fixture.match.results)[0] ? homeTeamWon(fixture.match.results)[1] : ""}
                                            </Text>
                                            <Text style={awayTeamWon(fixture.match.results)[0] ? styles.awayTeam : ""}>
                                                {fixture.match.away_team[1] } 
                                                { awayTeamWon(fixture.match.results)[0] ? awayTeamWon(fixture.match.results)[1] : ""}
                                            </Text>
                                        </View>
                                    </Left>

                                    <Right>
                                        {fixture.match.results.length == 0 ?
                                            <Text note>{fixture.match.match_day}</Text> :
                                            <View>
                                                <Text style={homeTeamWon(fixture.match.results)[0] ? styles.homeTeam : ""}>
                                                    {fixture.match.results.home_team.goals_for}
                                                </Text>
                                                <Text style={awayTeamWon(fixture.match.results)[0] ? styles.awayTeam : ""}>
                                                    {fixture.match.results.away_team.goals_for}
                                                </Text>
                                            </View>
                                        }
                                    </Right>
                                    
                                    </TouchableOpacity>
                                </ListItem>
                            ))
                        }
                    </List>
                </ScrollView>
                }
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    leagues: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    },
    noMatches: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeTeam: {
        fontWeight: 'bold',
    },
    awayTeam: {
        paddingTop: 10,
        fontWeight: 'bold',
    },
    content: {
        flexDirection: "row",
        padding: 5,
    },
    badge: {
        alignItems: 'center'
    },
    games:{
        color: '#ffff',
        fontWeight: 'bold',
    },

    flexDirectionRow: {
        flexDirection: "column"
    }
});
