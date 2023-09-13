import React, {useState} from 'react';
import { Text, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';

/*const firebaseConfig = {
  apiKey: "AIzaSyCqUezsucX6o4lWwXuQwLC0BVLhJn_hiTY",
  authDomain: "projeto-react-native-deab0.firebaseapp.com",
  databaseURL: "https://projeto-react-native-deab0-default-rtdb.firebaseio.com",
  projectId: "projeto-react-native-deab0",
  storageBucket: "projeto-react-native-deab0.appspot.com",
  messagingSenderId: "994438534773",
  appId: "1:994438534773:web:fe4daeb4f61ea7ecc94a3c"
};
firebase.initializeApp(firebaseConfig);*/

const App = () => {
  const [coposDeAgua, setCoposDeAgua] =  useState(0);

  const adicionarCopoDeAgua = () =>{
  const novoTotal = coposDeAgua +1;
    setCoposDeAgua(novoTotal);

    const databaseRef = firebase.database().ref('/agua/copos');
    databaseRef.set(novoTotal);
}
    const resetarCoposDeAgua = () =>{
    setCoposDeAgua(0);

    const databaseRef = firebase.database().ref('/agua/copos');
    databaseRef.set(0);
      };

  return(
    <View>
      <Text>copos de água:{coposDeAgua}</Text>
      <Button title="bebi água hoje" onPress={adicionarCopoDeAgua} />
      <TouchableOpacity onPress={resetarCoposDeAgua}>
      <Text> resetar copos de agua </Text>
      </TouchableOpacity>
    </View>    
  );
}
export default App;