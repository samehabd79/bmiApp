import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  const calbmi = () => {
    const heightFormatter = height / 100;
    let bmi = weight / (heightFormatter*heightFormatter);
    bmi = bmi.toFixed(2);
    setResult(bmi);
  }

  return (
    <View style={styles.container}>


      <Text style={styles.text}>Please Add Your height in cm:</Text> 
      <TextInput
        style={styles.inputStyle}
        value = {height}
        onChangeText={text => setHeight(text)}
      />
      <Text style={styles.text}>Please Add Your weight in cm:</Text> 
      <TextInput
        style={styles.inputStyle}
        value = {weight}
        onChangeText={text => setWeight(text)}
      />

      <Text style={{marginTop:39}}>{result}</Text>
      <TouchableOpacity onPress={calbmi} style={styles.btn}>
        <Text>Calculate BMI</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:{
    backgroundColor:"#fff",
    width:'100',
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:20,
    paddingTop:10,
    marginTop:4,
    fontSize:16,
    textAlign: 'center',
    borderWidth:2,
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

  },
  text:{
    fontFamily: 1,
    fontWeight: 'bold',
    padding:10,
  },
  btn:{
    backgroundColor:"brown",
    width:'100',
    borderRadius:20,
    paddingHorizontal:30,
    paddingVertical:5,
    paddingTop:6,
    marginTop:30,
    fontSize:16,
    textAlign: 'center',
    borderWidth:2,
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});
