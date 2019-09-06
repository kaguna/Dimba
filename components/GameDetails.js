import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import LineUps from './LineUp';
import Commentary from './Commentary';
import Standings from './Standings';
export default class GameDetails extends React.Component {
  render() {
    const {navigation, match} = this.props;
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Commentary</Text></TabHeading>}>
            <Commentary  match={match}/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Standings</Text></TabHeading>}>
            <Standings 
              navigation={navigation}
            />
          </Tab>
          <Tab heading={ <TabHeading><Text>LineUp</Text></TabHeading>}>
            <LineUps />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
