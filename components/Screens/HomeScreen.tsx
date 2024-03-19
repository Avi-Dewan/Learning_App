import * as React from 'react';
import { Button, View, Text } from 'react-native';

// let datam = fetch('https://crudcrud.com/api/e2e6ccdac4194cd192d6a842a1e135d9');



const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> 2 Features :  {"\n\n"}
              1. Learning Chat System {"\n"}
              2. Learning using VR            
          </Text>
        </View>
      );

}

export default HomeScreen;