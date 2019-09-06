import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { withNavigation} from 'react-navigation';
import { View, Title, Left, Right, Button,Text, Icon, Body } from 'native-base';

class HeaderDetails extends React.Component {
    render() {
        const {title, screen} = this.props;
        return (
            <SafeAreaView style={ styles.headerColor}>
                <View style={{ flexDirection: 'row'}}>
                    <Left>
                        <Button
                        transparent
                        onPress ={() => this.props.navigation.navigate(screen)}
                        >
                            {/* <Icon name='ios-arrow-back' /> */}
                        <Text>Back</Text>
                        <Title style={ styles.title}>{title}</Title>
                        </Button>
                    </Left>

                    {/* <Body>
                        <Title style={ styles.title}>{title}</Title>
                    </Body> */}
                </View>
            </SafeAreaView>
        );
    }
}
export default withNavigation(HeaderDetails) 

const styles = StyleSheet.create({
    headerColor: {
        backgroundColor: '#185805',
        fontWeight: 'bold',
        fontSize: 15,
    },
    title: {
        color: '#ffff',
        marginLeft: 30,
        
    }
});