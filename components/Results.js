import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Content, List, ListItem, Left, Body, Right, Text, View, Container, Badge } from 'native-base';

export default class Results extends React.Component {
    checkForm = (param) => {
        switch(param) {
            case 'W':
                return { success: true }
                break;
            case 'D':
                return { warning: true }
                break;
        
            case 'L':
                return { danger: true } 
                break;

            default:
                return { info: true }
        }
    }

    render() {
        const {teamInfo: {previous_fixtures, form, results}} = this.props;
        return (
            <Container>
                <View>
                    <List>
                    {previous_fixtures.map((fixture, index) =>
                        <ListItem key={index}>
                            <Left> 
                                <Text>{fixture}</Text>
                            </Left>
                            <Body>
                                <Text>{results[index]}</Text>
                            </Body>
                            <Right>
                                <Badge {...this.checkForm(form[index])}><Text>{form[index]}</Text></Badge>
                            </Right>
                        </ListItem>
                    )}
                    </List>
                </View> 
            </Container>
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
