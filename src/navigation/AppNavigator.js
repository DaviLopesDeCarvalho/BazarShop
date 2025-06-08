import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import CadastrarProduto from '../screens/CadastrarProduto';
import RoupasMasculinas from '../screens/Roupas_masculinas';
import RoupasFemininas from '../screens/Roupas_femininas';
import Calcados from '../screens/Calcados';
import CelularesTablets from '../screens/Celulares_tablets';
import Computadores from '../screens/Computadores';
import Detalhes from '../screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Cadastrar Produto" component={CadastrarProduto} />
      <Stack.Screen name="Roupas Masculinas" component={RoupasMasculinas} />
      <Stack.Screen name="Roupas Femininas" component={RoupasFemininas} />
      <Stack.Screen name="Calçados" component={Calcados} />
      <Stack.Screen name="Celulares e Tablets" component={CelularesTablets} />
      <Stack.Screen name="Computadores e Acessórios" component={Computadores} />
      <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
