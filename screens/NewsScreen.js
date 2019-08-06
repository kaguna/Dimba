import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import { Button, Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class NewsScreen extends React.Component {
  data = {
    names: [
      {
        id: 1,
        image: 'IMG_0532.jpg',
        name: 'James Kaguna',
        desc: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
      },
      {
        id: 2,
        image: 'CROPPED-VSL_5166.jpg',
        name: 'Lowell Joel',
        desc: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
      },{
        id: 3,
        image: '20171109_145117.jpg',
        name: 'Mustafa Khalif',
        desc: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
      },{
        id: 4,
        image: '00100lPORTRAIT_00100_BURST20190226194707105_COVER.jpg',
        name: 'Liz Elsie',
        desc: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
      },{
        id: 5,
        image: 'IMG_20190302_160213.jpg',
        name: 'Bob Marley',
        desc: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
      },{
        id: 6,
        image: 'IMG_0532.jpg',
        name: 'Jack Chan',
        desc: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
      },
      ]
    }

    alertItemName = (item) => {
      alert(item.name)
    }

  render() {
    return (
      <Container>
        <Content>
          <List>
          {
          this.data.names.map((item, index) => (
            <ListItem avatar key = {item.id}>
              <Left>
                <Thumbnail source={{ uri: '/Users/jameskariuki/Dimba/assets/images/'+item.image }} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.desc}</Text>
              </Body>
              <Right>
                <Text note>{item.time}</Text>
              </Right>
              <Right>
              <Button transparent 
                onPress = {() => this.alertItemName(item)}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))
          }
          </List>
        </Content>
      </Container>
    );
  }
}

NewsScreen.navigationOptions = {
  title: 'News',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
