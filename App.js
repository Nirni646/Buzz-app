import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import fb from './screens/fb';
import insta from './screens/insta';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <AppContainer />
        
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: fb},
  Instagram: {screen: insta},
})

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
});