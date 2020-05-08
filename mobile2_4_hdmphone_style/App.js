import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, TextInput, Image, Button } from 'react-native';
import Constants from 'expo-constants';
export default class App extends Component {
  state={
    phoneBook:[{name:'Riemke, Thorsten', telefon:123, raum:'I2.37'},{name:'Mueller, Horst', telefon:'234', raum:'I0.07'}],
    gefunden:'keine Treffer',
    inputName:'',
    inputTelefon:'',
    inputRaum:''
  }
  render (){
      return (
        <View style={styles.view}>
        <View style={styles.header}>
          <Image
          style={{width: 50, height: 50}}
          source={require('./assets/hdmlogo.jpg')}
          />
          <Text>Telefonliste</Text>
          </View>
          <View style={styles.input}>
          <KeyboardAvoidingView behavior="padding" >
          <TextInput style={styles.input} placeholder="Neuer Eintrag:Name" 
              underlineColorAndroid={'red'}
              onChange={e => this.setState({inputName:e.nativeEvent.text})}
              value={this.state.inputName}
              />
          <TextInput style={styles.input} placeholder="Telefonnummer" 
              underlineColorAndroid={'red'}
              onChange={e => this.setState({inputTelefon:e.nativeEvent.text})}
              value={this.state.inputTelefon}
              />
          <TextInput style={styles.input} placeholder="Raum" 
              underlineColorAndroid={'red'}
              onChange={e => this.setState({inputRaum:e.nativeEvent.text})}
              value={this.state.inputRaum}
              />
           <Button
              title="Eintragen"
              color='red'
              onPress={() =>{
                this.setState({ phoneBook: 
                    [...this.state.phoneBook, { id:this.state.inputTelefon, name:this.state.inputName, 
                                                telefon:this.state.inputTelefon,
                                                raum:this.state.inputRaum}]
                  });
                  this.setState({inputName:'', inputTelefon:'', inputRaum:''})
              }}
        />
        </KeyboardAvoidingView>
        </View>
          <View style={styles.content}>
          <FlatList style={styles.list}
                      data={this.state.phoneBook}
                      renderItem={({ item }) => <View style={styles.listEntry}><Text style={styles.listEntryTitle}>{item.name}</Text>
                      <Text>Telefon: {item.telefon}</Text>
                      <Text>Raum: {item.raum}</Text></View>}
                      keyExtractor={item => item.telefon.toString()}
            />

        </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 5,
    backgroundColor: '#fff',
  },
  listEntry:{
    backgroundColor: '#d6d6d4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listEntryTitle:{
    fontSize:20,
  },
  input:{
    marginVertical: 2,
    marginHorizontal: 8,
  },
});
