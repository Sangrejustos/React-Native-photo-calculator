import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';
import { Navbar } from './src/Navbar';
import {Workshop} from "./src/Workshop";
import {useState} from "react";
import {Common} from "./src/Common";

export default function App() {
    const [isCommon, setCommon] = useState(true)
    const [isUser, setUser] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar title="Калькулятор стоимости печати фотографий"/>
      <View style={styles.buttonWrapper}>
      <View style={styles.buttonBlock}>
          <Button title="Стандартные форматы" onPress={() => {setCommon(true); setUser(false)}} />
          <Button title="Пользовательский формат" onPress={() => {setCommon(false); setUser(true)}}/>
      </View>
      </View>
        {isCommon && <Common/>}
        {isUser && <Workshop/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  buttonBlock: {
      height: 100,
      width: 200,
      justifyContent:"space-between"
  },

  buttonWrapper: {
      alignItems: "center"
  }
});
