import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ titulo, descricao, imagem, onPress }) => (
  <View style={sharedStyles.card}>
    <View style={sharedStyles.cardContent}>
      <Image source={imagem} style={sharedStyles.imagem} />
      <View style={sharedStyles.textContainer}>
        <Text style={sharedStyles.titulo}>{titulo}</Text>
        <Text style={sharedStyles.descricao}>{descricao}</Text>
        <TouchableOpacity style={sharedStyles.button} onPress={onPress}>
          <Text style={sharedStyles.buttonText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function Home() {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={sharedStyles.bordacard}>
        <Text style={sharedStyles.header}>Categorias</Text>
        <Card
          titulo="Roupas Masculinas"
          descricao="Camisetas, calças, casacos..."
          imagem={require('../assets/img/Roupas_masculinas/camisetas.jpg')}
          onPress={() => navigation.navigate('Roupas Masculinas')}
        />
        <Card
          titulo="Roupas Femininas"
          descricao="Vestidos, blusas, saias..."
          imagem={require('../assets/img/Roupas_femininas/vestidos.jpg')}
          onPress={() => navigation.navigate('Roupas Femininas')}
        />
        <Card
          titulo="Calçados"
          descricao="Tênis, botas, sandálias..."
          imagem={require('../assets/img/Calcados/tenis.jpg')}
          onPress={() => navigation.navigate('Calçados')}
        />
        <Card
          titulo="Celulares e Tablets"
          descricao="Smartphones e tablets diversos"
          imagem={require('../assets/img/Celulares/smartphones.jpg')}
          onPress={() => navigation.navigate('Celulares e Tablets')}
        />
        <Card
          titulo="Computadores"
          descricao="Notebooks, monitores e periféricos"
          imagem={require('../assets/img/Computadores/notebook.jpg')}
          onPress={() => navigation.navigate('Computadores e Acessórios')}
        />
       
      </View>
    </ScrollView>
  );
}

const sharedStyles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    shadowRadius: 4,
    marginBottom: 15,
    width: 350,
    borderColor: '#000000',
    borderWidth: 2
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  header: {
    fontFamily: 'Quicksand_700Bold',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 15,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
  },
  descricaoHeader: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 14,
    marginBottom: 15,
    width: 356,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  titulo: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    textAlign: 'left',
  },
  descricao: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Quicksand_600SemiBold',
    width: 300,
  },
  bordacard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'cyan',
    borderRadius: 7,
    alignItems: 'center',
    width: 150,
    padding: 8,
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Quicksand_600SemiBold',
  },
});
