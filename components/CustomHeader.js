import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { withNavigation} from 'react-navigation';
import { View, Title, Left, Right, Button, Icon, Body } from 'native-base';

class CustomHeader extends React.Component {
    render() {
        return (
            <SafeAreaView>
            <View style={styles.headerContainer}>
                <Left>
                    <Button
                     transparent
                     onPress ={() => this.props.navigation.navigate(String(this.props.navigationPath))}
                     >
                        <Icon name='ios-arrow-back' />
                    </Button>
                </Left>

                 <Body>
                    <Title>{this.props.title}</Title>
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

const styles = StyleSheet.create({
    headerContainer: {
     flexDirection: 'row'
    }
})
export default withNavigation(CustomHeader)