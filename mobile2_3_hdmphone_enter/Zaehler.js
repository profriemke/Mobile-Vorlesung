import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Zaehler extends Component {

  render (){

      return (
        
          <Text style={styles.zaehler}>Klicks: {this.props.klicks} </Text>
      );
  }
}
const styles = StyleSheet.create({
  zaehler:{
    color: '#0f0',
    fontSize:80,
  },
});