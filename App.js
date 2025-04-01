import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { Quicksand_300Light, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

const Stack = createNativeStackNavigator();


//  Estrutura dos Cards
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

// Estrutura de Navegação Para Roupas Masculinas

const RoupasMasculinasScreem = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Roupas Masculinas</Text>
        <Text style={styles.descricaoHeader}>
          Encontre roupas masculinas para todas as situações, seja para o trabalho, eventos especiais ou momentos casuais. Temos camisetas socias, estampadas , casuais.  
          Calças jeans, cargos, retas. Bermudas, Casacos moletons, corta ventos, jaquetas e muito mais. Escolha entre marcas conhecidas, peças vintage ou roupas básicas 
          e confortáveis que combinam com seu estilo.
        </Text>
        <Card
          titulo="Camisetas"
          descricao="Sociais, estampadas, casuais... "
          imagem={require('./assets/img/Roupas_masculinas/camisetas.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Calças"
          descricao="Jeans, cargo, retas... "
          imagem={require('./assets/img/Roupas_masculinas/calcas.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Casacos"
          descricao="Moletons, corta ventos, jaquetas... "
          imagem={require('./assets/img/Roupas_masculinas/casacos.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  );
};

// Estrutura de Navegação Para RoupasFemininas

const RoupasfemininasScreem = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Roupas Femininas</Text>
        <Text style={styles.descricaoHeader}>
        Renove seu guarda-roupa com peças incríveis, desde vestidos sofisticados até looks casuais para o dia a dia. Aqui você encontra blusas, vestidos, saias, calças, macacões, casacos
        e muito mais, sempre com preços acessíveis. Explore peças estampadas, tecidos leves e cortes modernos que valorizam seu corpo e sua personalidade.
        </Text>
        <Card
          titulo="Vestidos"
          descricao="Curtos, longos, rodado... "
          imagem={require('./assets/img/Roupas_femininas/vestidos.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Calças"
          descricao="Jeans, cargo, social... "
          imagem={require('./assets/img/Roupas_femininas/calcasfemininas.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Casacos"
          descricao="Moletons, corta ventos, jaquetas... "
          imagem={require('./assets/img/Roupas_femininas/casacosfemininos.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  )
}


// Estrutura de Navegação Para Óculos e Acessórios
const OculosAcessoriosScreem = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Óculos e Acessórios</Text>
        <Text style={styles.descricaoHeader}>
        Os detalhes fazem toda a diferença! Escolha entre uma grande variedade de óculos de sol, armações para óculos de grau, relógios, colares, brincos, pulseiras e outros acessórios que 
        vão dar um toque especial ao seu visual. Seja um look mais clássico ou despojado, aqui você encontra o acessório perfeito para cada ocasião.
        </Text>
        <Card
          titulo="Óculos"
          descricao="Sol, grau... "
          imagem={require('./assets/img/Oculos_acessorios/oculos.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Relógios"
          descricao="Esportivos, sofisticados... "
          imagem={require('./assets/img/Oculos_acessorios/relogios.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Bijuterias e semijoias"
          descricao="Colares, brincos, pulseiras... "
          imagem={require('./assets/img/Oculos_acessorios/bijuterias.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  )
}

// Estrutura de Navegação Para Calçados
const CalcadosScreem = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Calçados</Text>
        <Text style={styles.descricaoHeader}>
        São diversas opções de tênis, sapatos sociais, sandálias, botas e rasteirinhas e chinelhos. Quer aquele par especial para um evento ou algo confortável para o dia a dia? Aqui você 
        encontra modelos para todos os gostos, sempre por preços irresistíveis.
        </Text>
        <Card
          titulo="Tênis"
          descricao="Sociais, casuais... "
          imagem={require('./assets/img/Calcados/tenis.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Botas"
          descricao="Coturno, galocha, cano alto... "
          imagem={require('./assets/img/Calcados/botas.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Sandálias e Chinelos"
          descricao="Rasterinhas, chinelos... "
          imagem={require('./assets/img/Calcados/sandalias.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  )
}

// Estrutura de Navegação Para Celulares e Tablets
const CelularesTabletsScreem = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Celulares e Tablets</Text>
        <Text style={styles.descricaoHeader}>
        Escolha entre uma variedade de smartphones e tablets de diversas marcas e modelos. Todos os produtos passam por avaliações para garantir qualidade e bom funcionamento.
        Quer um celular para fotos incríveis, um tablet para trabalho ou um modelo básico para uso diário? Aqui você encontra tudo isso e muito mais!
        </Text>
        <Card
          titulo="Smartphones"
          descricao="Samsung, Iphone, Motorola... "
          imagem={require('./assets/img/Celulares/smartphones.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Tablets"
          descricao="Samsung, Lenovo, Xiaomi... "
          imagem={require('./assets/img/Celulares/Tablet.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  )
}

// Estrutura de Navegação Para Computadores e Acessórios
const ComputadoresAcessoriosScreem = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Computadores e Acessórios</Text>
        <Text style={styles.descricaoHeader}>
        Oferecemos notebooks, desktops, monitores, teclados, mouses, fones de ouvido e outros periféricos. Seja para estudar, trabalhar ou jogar, temos opções que atendem a
        diferentes necessidades e orçamentos. Precisa de um computador potente ou de um acessório extra para melhorar sua produtividade? Você está no lugar certo!
        </Text>
        <Card
          titulo="Notebooks"
          descricao="Samsung, Dell, Acer... "
          imagem={require('./assets/img/Computadores/notebook.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Monitores"
          descricao="LG, AOC, Samsung... "
          imagem={require('./assets/img/Computadores/Monitores.png')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Periféricos"
          descricao="Mouses, Teclados, Fones... "
          imagem={require('./assets/img/Computadores/perifericos.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  )
}

// Estrutura de Navegação Para Video Games e Consoles
const VideogamesConsolesScreem = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.bordacard}>
        <Text style={styles.header}>Video Games e Consoles</Text>
        <Text style={styles.descricaoHeader}>
        Explore uma seleção de consoles novos e usados, incluindo PlayStation, Xbox e Nintendo, além de jogos para todas as plataformas. Quer completar sua coleção ou encontrar
        aquele jogo que sempre quis jogar? Aqui você acha títulos clássicos e lançamentos por preços incríveis!
        </Text>
        <Card
          titulo="Jogos"
          descricao="PlayStation, Xbox, Nintendo... "
          imagem={require('./assets/img/Videosgames/jogos.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Consoles"
          descricao="PlayStation, Xbox, Nintendo..."
          imagem={require('./assets/img/Videosgames/console.jpg')}
          onPress={() => navigation.navigate('')}
        />
        <Card
          titulo="Acessórios"
          descricao="Controles, Headphones, Carregadores... "
          imagem={require('./assets/img/Videosgames/Controles.jpg')}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </ScrollView>
  )
}


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
      </Stack.Navigator>
    </NavigationContainer>
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
    shadowOffset: { width: 0, height: -3},
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

});