import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';

export default class App extends Component {
  state={
    phoneBook:[{id:1, name:'Riemke', telefon:123},{id:2, name:'Mueller', telefon:'234'}],
    gefunden:'keine Treffer'
  }
  render (){
      return (
        <View style={styles.container}>
          <Image
          style={{width: 50, height: 50}}
          source={require('./assets/hdmlogo.jpg')}
          />
          <Text>Telefonliste</Text>
          <FlatList
                      data={this.state.phoneBook}
                      renderItem={({ item }) => <Text>{item.name} Telefon: {item.telefon}</Text>}
                      // keyExtractor={item => item.id} <-- funktioniert nicht, da key kein String
                      keyExtractor={item => item.id.toString()}
            />
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
