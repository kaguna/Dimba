import React from 'react';
import { Header, Item, Input, Icon } from 'native-base';
export default class SearchBar extends React.Component {
  render() {
    return (
      <Item>
        <Input placeholder="Search League" />
        <Icon name="ios-search" />
      </Item>
    );
  }
}
