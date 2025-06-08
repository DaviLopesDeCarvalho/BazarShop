import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import { Quicksand_300Light, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase.js';


export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace('Main');
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  };

  const [fontsLoaded] = useFonts({
      Quicksand_300Light,
      Quicksand_700Bold,
      Quicksand_600SemiBold
    });
  
    if (!fontsLoaded) {
      return null;
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>
        Não tem Cadastro?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 16,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    width: '90%',
    maxWidth: 400,
    height: 350,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Quicksand_700Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonContainer: {
    marginTop: 15,
    backgroundColor: '#00FFFF',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
  },
  linkText: {
    textAlign: 'center',
    marginTop: 16,
  },
  link: {
    color: '#00BFFF',
    fontFamily: 'Quicksand_600SemiBold',
  },
});
