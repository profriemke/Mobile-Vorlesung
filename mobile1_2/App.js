import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  state={
    klicks:0
  }
  render (){
    const aktuelleKlicks=this.state.klicks
      return (
        <View style={styles.container}>
          <Text style={styles.zaehler}>Klicks: {aktuelleKlicks} </Text>
          <Button title='Ein Klick!' onPress={()=> { this.setState({klicks:aktuelleKlicks+1}) }} style={styles.button}/>
          <Button title='Ein Klick weniger!' onPress={()=> { this.setState({klicks:aktuelleKlicks-1}) }} style={styles.button} />
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
  zaehler:{
    color: '#0f0',
    fontSize:80,
  },
});
