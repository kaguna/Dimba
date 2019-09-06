import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Badge, List, ListItem, Text, View } from 'native-base';

export default class Commentary extends React.Component {
    checkEventType = (eventId) => {
        switch(eventId) {
            case 1:
                return { success: true }
                break;
            case 2:
                return { warning: true }
                break;
        
            case 3:
                return { danger: true } 
                break;

            default:
                return { info: true }
        }
    }



    render() {
        const {commentaries} = this.props.match.match;
        return (
            <View style={styles.list}>
                <List>
                    {
                        commentaries.map((commentary, index) =>
                            <ListItem key={index}>
                                <Badge {...this.checkEventType(commentary.event[0])}>
                                    <Text>{commentary.commentary_time}'</Text>
                                </Badge>
                                <Text> {commentary.event[1]} for </Text>
                                <Text style={styles.team}>{commentary.team} </Text>
                                <Text> ({commentary.player}) </Text>
                                <Text>({commentary.description})</Text>
                            </ListItem> 
                    )}
                </List>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    team: {
        fontWeight: 'bold'
    }
});
