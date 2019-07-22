import React from 'react';
import { createMaterialTopTabNavigator,createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Camera, Menu} from './index'

const TopTabNavigator = createBottomTabNavigator({
CameraScreen: Camera,
MenuScreen: Menu 
}, {
})
export default createAppContainer(TopTabNavigator)
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
// import { withNavigation} from 'react-navigation';
// // import Tab1 from './tabOne';
// // import Tab2 from './tabTwo';
// // import Tab3 from './tabThree';
// export default class GameDetails extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Tabs>
//           <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
//             {/* <Tab1 /> */}
//           </Tab>
//           <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
//             {/* <Tab2 /> */}
//           </Tab>
//           <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
//             {/* <Tab3 /> */}
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }
