import React from 'react';
import { Text, Button, View, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  let numero_aleatorio = Math.floor(Math.random() * 10 );
  alert(numero_aleatorio)
}

const App = () => {
  return(
    <View>
      <Text>Gerador de numeros</Text>
      <Button 
        title = "Gerar um numero randomico"
        onPress = {geraNumeroAleatorio}
      />
    </View>
  );
};
AppRegistry.registerComponent('App1', () => App);
export default App;