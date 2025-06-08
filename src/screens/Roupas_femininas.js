import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getProductsByCategory } from '../services/api';
import Loading from '../components/Loading.js';

const traduzirTexto = (texto) => {
  return texto
    .replace(/women/gi, 'mulher')
    .replace(/dress/gi, 'vestido')
    .replace(/cotton/gi, 'algodão');
};

export default function RoupasFemininas({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory('womens-dresses')
      .then(setProdutos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{traduzirTexto(item.title)}</Text>
        <Text style={styles.desc}>{traduzirTexto(item.description.slice(0, 60))}...</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detalhes', { productId: item.id })}>
          <Text style={styles.buttonText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) return <Loading />;
  if (!produtos.length) return <Text style={{ padding: 20 }}>Nenhum produto encontrado.</Text>;

  return (
    <FlatList
      data={produtos}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 10,
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#eaeaea',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: 350    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'cyan',
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
