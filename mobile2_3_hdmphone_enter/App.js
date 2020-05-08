import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, TextInput, Image, Button } from 'react-native';

export default class App extends Component {
  state={
    phoneBook:[{name:'Riemke', telefon:123},{name:'Mueller', telefon:'234'}],
    gefunden:'keine Treffer',
    inputName:'',
    inputTelefon:''
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
                      keyExtractor={item => item.telefon.toString()}
            />
          <KeyboardAvoidingView behavior="padding">
          <TextInput style={styles.input} placeholder="Neuer Eintrag:Name" 
              onChange={e => this.setState({inputName:e.nativeEvent.text})}
              />
          <TextInput style={styles.input} placeholder="Neuer Eintrag:Telefonnummer" 
              onChange={e => this.setState({inputTelefon:e.nativeEvent.text})}
              />
           <Button
              title="Eintragen"
              onPress={() =>{
                this.setState({ phoneBook: 
                    [...this.state.phoneBook, { id:this.state.inputTelefon, name:this.state.inputName, 
                                                telefon:this.state.inputTelefon}]
                  });
                  this.setState({inputName:'', inputTelefon:''})
              }}
        />
        </KeyboardAvoidingView>
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
