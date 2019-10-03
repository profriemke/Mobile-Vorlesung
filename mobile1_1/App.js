import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  render (){
      return (
        <View style={styles.container}>
          <Text>Klicks: </Text>
          <Button title='Ein Klick!' onPress={()=> { alert('KLICK!') }}/>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
