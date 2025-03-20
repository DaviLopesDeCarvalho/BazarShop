import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { Quicksand_300Light, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";


const Card = ({ titulo, descricao, imagem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={imagem} style={styles.imagem} />
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.descricao}>{descricao}</Text>
        </View>
      </View>
    </View>
  );
};

export default function App() {

  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_700Bold,
    Quicksand_600SemiBold
  });

  return (
    
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Moda & Acessórios</Text>
        <Card
          titulo="Roupas Masculinas"
          descricao="Camisetas, calças, jaquetas..."
          imagem={require('./assets/img/roupas_masculinas.png')}
        />

        <Card
          titulo="Roupas Femininas"
          descricao={"Vestidos, blusas, saias..."}
          imagem={require('./assets/img/roupas_femininas.png')}
        />

        <Card
          titulo={"Óculos e Acessórios"}
          descricao={"óculos de sol, relógios, bijuterias..."}
          imagem={require('./assets/img/oculos.png')}
        />
        <Card
          titulo={"Calçados"}
          descricao={"Tênis, botas, sandálias, sapatos..."}
          imagem={require('./assets/img/calcados.png')}
        />

        <Text style={styles.header}>Eletrônicos & Tecnologia</Text>
        <Card
          titulo={"Celulares e Tablets"}
          descricao={"smartphones e tablets usados."}
          imagem={require('./assets/img/celulares.png')}
        />
        <Card
          titulo={"Computadores e Acessórios"}
          descricao={"Notebooks, monitores, periféricos..."}
          imagem={require('./assets/img/computadores.png')}
        />
        <Card
          titulo={"Video Games e Consoles"}
          descricao={"Jogos, consoles e acessórios."}
          imagem={require('./assets/img/videogames.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    shadowOffset: { width: 0, height: 3 },
    marginBottom: 15,
    width: 350,
    elevation: 7,
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
    marginBottom: 15,
    marginLeft: 15,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  titulo: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    textAlign: 'left',
    justifyContent: 'left',
  },
  descricao: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'left',
    justifyContent: 'left',
    fontFamily: 'Quicksand_600SemiBold',
  },
  bordacard: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 10,
    alignItems: 'center',
  },
});