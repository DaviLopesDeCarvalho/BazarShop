import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList, StatusBar, Image } from 'react-native';

const DATA = [
  {
    title: 'Moda & Acessórios',
    data: [
      { title: 'Roupas masculinas', image: require('./assets/roupas_masculinas.png') },
      { title: 'Roupas femininas', image: require('./assets/roupas_femininas.png') },
      { title: 'Óculos e acessórios', image: require('./assets/oculos.png') },
      { title: 'Calçados', image: require('./assets/calcados.png') },
      { title: 'Bolsas e mochilas', image: require('./assets/bolsas.png') },
    ],
  },
  {
    title: 'Eletrônicos & Tecnologia',
    data: [
      { title: 'Celulares e tablets', image: require('./assets/celulares.png') },
      { title: 'Computadores e acessórios', image: require('./assets/computadores.png') },
      { title: 'Video games e consoles', image: require('./assets/videogames.png') },
    ],
  },
];

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    
  },
  item: {
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    borderColor:'#ffffff',
    marginTop: 15,
    width: 350, 
    height: 250,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150, 
    height: 150,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    
  },
  header: {
    fontFamily: 'Quicksand',
    marginLeft: 15,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 300,
    fontStyle: 'normal',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Quicksand',
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 100,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default App;