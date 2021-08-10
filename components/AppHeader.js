import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Buzz App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'pink',
    alignItems: 'center',
   marginTop: 0
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
  },
});
