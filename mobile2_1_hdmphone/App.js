import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Zaehler from './Zaehler.js';

export default class App extends Component {
  state={
    phoneBook:{riemke:'123', mueller:'234'},
    gefunden:'keine Treffer'
  }
  render (){
    const aktuelleKlicks=this.state.klicks
      return (
        <View style={styles.container}>
          <Image
          style={{width: 50, height: 50}}
          source={require('./assets/hdmlogo.jpg')}
        />
          <TextInput  placeholder='Suche ...' 
                      returnKeyType='done'
                      onSubmitEditing={(e) =>{
                        //alert(e.nativeEvent.text)
                        let found=this.state.phoneBook[e.nativeEvent.text.toLowerCase()]
                        this.setState({gefunden:found})
                        }
                      }
                      >
          </TextInput> 
          <Text>{this.state.gefunden}</Text>
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
