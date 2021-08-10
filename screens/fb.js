import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export default class fb extends React.Component {
    render() {
      return (
       <View style={{ flex: 1, alignItems: 'center', marginTop: 100, }}>
          <Text style={{color: '#4267B2', textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}> FACEBOOK </Text>
        </View>

      );
    }
  }