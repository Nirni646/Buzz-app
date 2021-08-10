import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export default class insta extends React.Component {
    render() {
      return (
       <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{color: '#fb3958', textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}> INSTAGRAM </Text>
        </View>

      );
    }
  }