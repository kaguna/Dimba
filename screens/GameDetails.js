import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import CustomHeader from '../components/CustomHeader';

class GameDetails extends React.Component {
  static navigationOptions = {
    header: <CustomHeader title='Home Vs Away' navigationPath = 'NewsTab'/>
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>this is Games Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default  GameDetails;