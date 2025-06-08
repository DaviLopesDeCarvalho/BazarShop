import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { db } from '../services/firebase.js';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


export default function CadastrarProdutoScreen() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('roupas_masculinas');
  const [condicao, setCondicao] = useState('novo');
  const [desconto, setDesconto] = useState(0);
  const [avaliacao, setAvaliacao] = useState(3);
  const [disponivel, setDisponivel] = useState(true);
  const [entregaGratis, setEntregaGratis] = useState(false);

  const handleSalvar = async () => {
  try {
    const novoProduto = {
      nome,
      descricao,
      preco: parseFloat(preco),
      categoria,
      condicao,
      desconto,
      avaliacao,
      disponivel,
      entregaGratis,
      criadoEm: Timestamp.now(),
    };

    await addDoc(collection(db, 'produtos'), novoProduto);

    alert('Produto salvo com sucesso no Firebase!');
    setNome('');
    setDescricao('');
    setPreco('');
    setCategoria('roupas_masculinas');
    setCondicao('novo');
    setDesconto(0);
    setAvaliacao(3);
    setDisponivel(true);
    setEntregaGratis(false);
  } catch (error) {
    console.error('Erro ao salvar produto:', error);
    alert('Erro ao salvar produto!');
  }
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastrar Produto</Text>

        <TextInput style={styles.input} placeholder="Nome do produto" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
        <TextInput style={styles.input} placeholder="Preço" keyboardType="numeric" value={preco} onChangeText={setPreco} />
        <TextInput style={styles.input} placeholder="Tamanho/Número (ex: GG, 44...)" />

        <Text style={styles.label}>Categoria</Text>
        <Picker selectedValue={categoria} onValueChange={setCategoria} style={styles.picker}>
          <Picker.Item label="Roupas Masculinas" value="roupas_masculinas" />
          <Picker.Item label="Roupas Femininas" value="roupas_femininas" />
          <Picker.Item label="Calçados" value="calcados" />
          <Picker.Item label="Acessórios" value="acessorios" />
          <Picker.Item label="Eletrônicos" value="eletronicos" />
        </Picker>

        <Text style={styles.label}>Condição</Text>
        <Picker selectedValue={condicao} onValueChange={setCondicao} style={styles.picker}>
          <Picker.Item label="Novo" value="novo" />
          <Picker.Item label="Usado" value="usado" />
        </Picker>

        <Text style={styles.label}>Desconto (%)</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={desconto}
          onValueChange={setDesconto}
          minimumTrackTintColor="#00FFFF"
          maximumTrackTintColor="#d3d3d3"
        />
        <Text style={styles.sliderValue}>{desconto}%</Text>

        <Text style={styles.label}>Avaliação mínima</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={avaliacao}
          onValueChange={setAvaliacao}
          minimumTrackTintColor="#00FFFF"
          maximumTrackTintColor="#d3d3d3"
        />
        <Text style={styles.sliderValue}>{avaliacao} estrelas</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Disponível</Text>
          <Switch
            value={disponivel}
            onValueChange={setDisponivel}
            trackColor={{ false: '#d3d3d3', true: '#00FFFF' }}
            thumbColor={disponivel ? '#00FFFF' : '#f4f3f4'}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Entrega Grátis</Text>
          <Switch
            value={entregaGratis}
            onValueChange={setEntregaGratis}
            trackColor={{ false: '#d3d3d3', true: '#00FFFF' }}
            thumbColor={entregaGratis ? '#00FFFF' : '#f4f3f4'}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar Produto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    padding: 16,
    borderRadius: 8,
    shadowRadius: 4,
    borderColor: '#000000',
    borderWidth: 2,
    marginBottom: 10,
  },
  title: {
    marginTop: 15,
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    shadowRadius: 4,
    borderColor: '#000000',
    borderWidth: 2,
  },
  label: {
    fontFamily: 'Quicksand_600SemiBold',
    marginTop: 10,
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
    shadowRadius: 4,
    borderColor: '#000000',
    borderWidth: 2,
    height: 40,
  },
  sliderValue: {
    textAlign: 'right',
    marginBottom: 10,
    fontFamily: 'Quicksand_600SemiBold',
  },
  switchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowRadius: 4,
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 2,
    padding: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 150,
    height: 40,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#00FFFF',
  },
  buttonText: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Quicksand_700Bold',
  },
});
