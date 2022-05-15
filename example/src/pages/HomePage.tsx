import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomePage: React.FC = () => {
  const makeNavigationAction = (to: string) => () =>
    navigation.navigate(to as any);
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Button
        testID={'default-modal-open-button'}
        title={'Default'}
        onPress={makeNavigationAction('DefaultModal')}
      />
      <Button
        testID={'slow-modal-open-button'}
        title={'Slow'}
        onPress={makeNavigationAction('SlowModal')}
      />
      <Button
        testID={'slide-modal-open-button'}
        title={'Sliding from the sides'}
        onPress={makeNavigationAction('SlideModal')}
      />
      <Button
        testID={'fancy-modal-open-button'}
        title={'Fancy'}
        onPress={makeNavigationAction('FancyModal')}
      />
      <Button
        testID={'swipeable-modal-open-button'}
        title={'Swipe'}
        onPress={makeNavigationAction('SwipeableModal')}
      />
      <Button
        testID={'scrollable-modal-open-button'}
        title={'Scrollable'}
        onPress={makeNavigationAction('ScrollableModal')}
      />
      <Button
        testID={'bottom-half-modal-open-button'}
        title={'Bottom-Half'}
        onPress={makeNavigationAction('BottomHalfModal')}
      />
      <Button
        testID={'custom-backdrop-modal-open-button'}
        title={'Custom Backdrop'}
        onPress={makeNavigationAction('CustomBackdropModal')}
      />
      <Button
        testID={'backdrop-close-modal-open-button'}
        title={'Close on Backdrop Press'}
        onPress={makeNavigationAction('BackdropCloseModal')}
      />
      <Button
        testID={'without-cover-screen'}
        title={'Without coverScreen'}
        onPress={makeNavigationAction('WithoutCoverScreenModal')}
      />
      <Button
        testID={'without-backdrop'}
        title={'Without backdrop'}
        onPress={makeNavigationAction('WithoutBackdropModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
