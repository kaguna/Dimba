import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderDetails from '../components/HeaderDetails'
import TeamDetails from '../components/TeamDetails'
import TeamInfo from '../components/TeamInfo'

export default class TeamScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const teamName = navigation.getParam('team').name
        return {
            header: <HeaderDetails title={ teamName} screen='Game' />,
        }
    };

    render() {
        const teamInfo = this.props.navigation.getParam('team');
        return (
            <ScrollView>
                <TeamDetails teamInfo={teamInfo} />
                <TeamInfo teamInfo={teamInfo} />
            </ScrollView>
        );
    }
}
