import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase.js';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Usuário registrado!');
      navigation.replace('Login');
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>
        Já tem login?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Entrar
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
    height: 450,
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
    alignItems: 'center'
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

