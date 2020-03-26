import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import Main from '../../screens/Main';

export default class RootContainer extends React.Component {

  render() {

    return (
      <View style={styles.container}>
          <Main />
      </View>
    );
  }
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainConverter: {
    flex: .2,
    backgroundColor: '#ff3',
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? 50
        : 0
  }
});
