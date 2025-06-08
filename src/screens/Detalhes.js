import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';

const traduzirTexto = (texto) => texto
  .replace(/women/gi, 'mulher')
  .replace(/dress/gi, 'vestido')
  .replace(/cotton/gi, 'algodão');

export default function Detalhes({ route }) {
  const { productId } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(productId)
      .then(setProduto)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <Loading />;
  if (!produto) return <Text style={{ padding: 20 }}>Produto não encontrado.</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{traduzirTexto(produto.title)}</Text>
      <Text style={styles.category}>Categoria: {traduzirTexto(produto.category)}</Text>
      <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
      <Text style={styles.desc}>{traduzirTexto(produto.description)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  category: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    textAlign: 'center'
  },
  price: {
    fontSize: 18,
    color: '#007b7b',
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center'
  },
});
