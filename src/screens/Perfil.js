import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { auth } from '../services/firebase';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUsuario(user);
    });
    return unsubscribe;
  }, []);

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text style={styles.nome}>Usuário não autenticado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: usuario.photoURL || 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <Text style={styles.nome}>{usuario.displayName || 'Usuário'}</Text>
        <Text style={styles.email}>{usuario.email}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  profileCard: {
    backgroundColor: '#eaeaea',
    borderRadius: 12,
    padding: 20,
    width: 450,
    height: 450,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#00FFFF',
  },
  nome: {
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    fontFamily: 'Quicksand_600SemiBold',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Quicksand_700Bold',
    color: '#000',
  },
});
