import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomePage from './pages/HomePage';
import BackdropCloseModal from './modals/BackdropCloseModal';
import BottomHalfModal from './modals/BottomHalfModal';
import CustomBackdropModal from './modals/CustomBackdropModal';
import DefaultModal from './modals/DefaultModal';
import WithoutCoverScreenModal from './modals/WithoutCoverScreenModal';
import FancyModal from './modals/FancyModal';
import ScrollableModal from './modals/ScrollableModal';
import SlideModal from './modals/SlideModal';
import SwipeableModal from './modals/SwipeableModal';
import SlowModal from './modals/SlowModal';
import WithoutBackdropModal from './modals/WithoutBackdropModal';

// const StackNavigator = createStackNavigator(
//   {
//     Home: makeScene(HomePage),
//     BackdropCloseModal: makeScene(BackdropCloseModal),
//     BottomHalfModal: makeScene(BottomHalfModal),
//     CustomBackdropModal: makeScene(CustomBackdropModal),
//     DefaultModal: makeScene(DefaultModal),
//     FancyModal: makeScene(FancyModal),
//     ScrollableModal: makeScene(ScrollableModal),
//     SlideModal: makeScene(SlideModal),
//     SlowModal: makeScene(SlowModal),
//     SwipeableModal: makeScene(SwipeableModal),
//     WithoutCoverScreenModal: makeScene(WithoutCoverScreenModal),
//     WithoutBackdropModal: makeScene(WithoutBackdropModal),
//   },
//   {
//     initialRouteName: 'Home',
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 300,
//         easing: Easing.out(Easing.poly(5)),
//         timing: Animated.timing,
//         useNativeDriver: true,
//       },
//       screenInterpolator: (sceneProps: SceneInterpolatorProps) => {
//         const {layout, position, scene} = sceneProps;

//         const thisSceneIndex = scene.index;
//         const width = layout.initWidth;

//         const translateX = position.interpolate({
//           inputRange: [thisSceneIndex - 1, thisSceneIndex],
//           outputRange: [width, 0],
//         });

//         return {transform: [{translateX}]};
//       },
//     }),…
//   },…
// );

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="BackdropCloseModal"
          component={BackdropCloseModal}
        />
        <Stack.Screen name="BottomHalfModal" component={BottomHalfModal} />
        <Stack.Screen
          name="CustomBackdropModal"
          component={CustomBackdropModal}
        />
        <Stack.Screen name="DefaultModal" component={DefaultModal} />
        <Stack.Screen name="FancyModal" component={FancyModal} />
        <Stack.Screen name="ScrollableModal" component={ScrollableModal} />
        <Stack.Screen name="SlideModal" component={SlideModal} />
        <Stack.Screen name="SlowModal" component={SlowModal} />
        <Stack.Screen name="SwipeableModal" component={SwipeableModal} />
        <Stack.Screen
          name="WithoutCoverScreenModal"
          component={WithoutCoverScreenModal}
        />
        <Stack.Screen
          name="WithoutBackdropModal"
          component={WithoutBackdropModal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
