import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { Quicksand_300Light, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

import RoupasMasculinasScreem from './pages/Roupas_masculinas';
import RoupasfemininasScreem from './pages/Roupas_femininas';
import OculosAcessoriosScreem from './pages/Oculos_acessorios';
import CalcadosScreem from './pages/Calcados';
import CelularesTabletsScreem from './pages/Celulares_tablets';
import ComputadoresAcessoriosScreem from './pages/Computadores';
import VideogamesConsolesScreem from './pages/Videogames';
import LoginScreem from './pages/Login';
import CadastroScreem from './pages/Cadastro';
import CadastrarProdutoScreen from './pages/CadastrarProduto';



const Stack = createNativeStackNavigator();

const Card = ({ titulo, descricao, imagem, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={imagem} style={styles.imagem} />
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.descricao}>{descricao}</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Ver Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_700Bold,
    Quicksand_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.menuText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.menuText}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Cadastro Produto')}>
          <Text style={styles.menuText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bordacard}>
        <Text style={styles.header}>Moda & Acessórios</Text>
        <Text style={styles.descricaoHeader}>
          Encontre roupas, calçados e acessórios de diversos estilos, novos ou seminovos, por preços incríveis.
        </Text>
        <Card
          titulo="Roupas Masculinas"
          descricao="Camisetas, calças, casacos..."
          imagem={require('./assets/img/roupas_masculinas.png')}
          onPress={() => navigation.navigate('Roupas Masculinas')}
        />
        <Card
          titulo="Roupas Femininas"
          descricao={"Vestidos, blusas, saias..."}
          imagem={require('./assets/img/roupas_femininas.png')}
          onPress={() => navigation.navigate('Roupas Femininas')}
        />
        <Card
          titulo={"Óculos e Acessórios"}
          descricao={"Óculos de sol, relógios, bijuterias..."}
          imagem={require('./assets/img/oculos.png')}
          onPress={() => navigation.navigate('Óculos e Acessórios')}
        />
        <Card
          titulo={"Calçados"}
          descricao={"Tênis, botas, sandálias, sapatos..."}
          imagem={require('./assets/img/calcados.png')}
          onPress={() => navigation.navigate('Calçados')}
        />
        <Text style={styles.header}>Eletrônicos & Tecnologia</Text>
        <Text style={styles.descricaoHeader}>
          Dispositivos eletrônicos seminovos ou novos, com preços acessíveis e produtos de qualidade.
        </Text>
        <Card
          titulo={"Celulares e Tablets"}
          descricao={"Smartphones e tablets usados."}
          imagem={require('./assets/img/celulares.png')}
          onPress={() => navigation.navigate('Celulares e Tablets')}
        />
        <Card
          titulo={"Computadores e Acessórios"}
          descricao={"Notebooks, monitores, periféricos..."}
          imagem={require('./assets/img/computadores.png')}
          onPress={() => navigation.navigate('Computadores e Acessórios')}
        />
        <Card
          titulo={"Video Games e Consoles"}
          descricao={"Jogos, consoles e acessórios."}
          imagem={require('./assets/img/videogames.png')}
          onPress={() => navigation.navigate('Video Games e Consoles')}
        />
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BazarShop">
        <Stack.Screen name="BazarShop" component={HomeScreen} />
        <Stack.Screen name="Roupas Masculinas" component={RoupasMasculinasScreem} />
        <Stack.Screen name="Roupas Femininas" component={RoupasfemininasScreem} />
        <Stack.Screen name="Óculos e Acessórios" component={OculosAcessoriosScreem} />
        <Stack.Screen name="Calçados" component={CalcadosScreem} />
        <Stack.Screen name="Celulares e Tablets" component={CelularesTabletsScreem} />
        <Stack.Screen name="Computadores e Acessórios" component={ComputadoresAcessoriosScreem} />
        <Stack.Screen name="Video Games e Consoles" component={VideogamesConsolesScreem} />
        <Stack.Screen name="Login" component={LoginScreem} />
        <Stack.Screen name="Cadastro" component={CadastroScreem} />
        <Stack.Screen name="Cadastro Produto" component={CadastrarProdutoScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

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
    marginTop: 8,
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
    justifyContent: 'center',
    marginBottom: 15,
    width: 356,
    flex: 1,
    borderRadius: 10,
    shadowRadius: 4,
    borderColor: '#000000',
    borderWidth: 2,
    backgroundColor: '#eaeaea',
    padding: 10,
    alignItems: 'center',

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
    with: 300
  },

  bordacard: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 10,
    alignItems: 'center',
  },

  button: {
    backgroundColor: "cyan",
    borderRadius: 7,
    alignItems: 'center',
    width: 150,
    padding: 8,
    marginTop: 10,
  },

  buttonText: {
    justifyContent: 'center',
    fontFamily: 'Quicksand_600SemiBold',

  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
  },

  menuButton: {
    backgroundColor: 'cyan',
    padding: 4,
    borderRadius: 8,
    marginLeft: 5,
    width: 120,
    height: 43,
    alignItems: 'center',
  },

  menuText: {
    textAlign: 'center',
    fontFamily: 'Quicksand_600SemiBold',

  },

});
