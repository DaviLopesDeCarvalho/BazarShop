import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home.js';
import Perfil from '../screens/Perfil';
import CadastrarProdutoScreen from '../screens/CadastrarProduto.js';
import { View, Text } from 'react-native';
import { auth } from '../services/firebase';

const Drawer = createDrawerNavigator();

function SairScreen({ navigation }) {
  React.useEffect(() => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saindo...</Text>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#00AAAA',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Início"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadastrar Produto"
        component={CadastrarProdutoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={SairScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
