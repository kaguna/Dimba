import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import Results from './Results';
import Fixtures from './Fixtures';
import Squad from './Squad';
export default class TeamInfo extends React.Component {
    render() {
        const {teamInfo, navigation} = this.props;
        return (
            <Container>
                <Tabs>
                    <Tab heading={ <TabHeading><Text>Results</Text></TabHeading>}>
                    <Results teamInfo={teamInfo}/>
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Fixtures</Text></TabHeading>}>
                    <Fixtures teamInfo={teamInfo}/>
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Squad</Text></TabHeading>}>
                    <Squad teamInfo={teamInfo}/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
