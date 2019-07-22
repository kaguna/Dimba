import React from 'react';
import {SafeAreaView} from 'react-native';
import { withNavigation} from 'react-navigation';
import { View, Title, Left, Right, Button, Icon, Body } from 'native-base';
class BackButton extends React.Component {
    render() {
        console.log(this.props)
        return (
            <SafeAreaView>
            <View style={{ flexDirection: 'row'}}>
                <Left>
                    <Button
                     transparent
                     onPress ={() => this.props.navigation.navigate('Home')}
                     >
                        <Icon name='ios-arrow-back' />
                    </Button>
                </Left>
                
                <Body>
                    <Title>Match</Title>
                </Body>

                <Right>
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Right>
            </View>
            </SafeAreaView>
        );
    }
}
export default withNavigation(BackButton)