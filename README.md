- 🛒 Bazar Online
Projeito criado para a matéria de Programação para Dispositivos Móveis com o tema livre , onde o tema escolido foi: Bazar Online
O Bazar Online é um app de compra e venda de produtos usados e seminovos, permitindo que usuários anunciem, visualizem e explorem itens com praticidade. Desenvolvido com React Native + Expo e Firebase para autenticação e banco de dados.

---

-- 🚀 Funcionalidades

- ✅ Cadastro e login de usuários (com Firebase Authentication)
- ✅ Publicação de produtos com descrição, preço, categoria, etc.
- ✅ Lista de produtos por categoria (Roupas, Calçados, Eletrônicos etc)
- ✅ Visualização de detalhes de cada produto
- ✅ Drawer menu com navegação lateral (Início, Perfil, Sair)
- ✅ Tela de perfil conectada ao usuário logado
- ✅ Integração com API pública (DummyJSON)
- ✅ Tela de carregamento com animação enquanto carrega os dados
- ✅ Interface responsiva e moderna com fontes personalizadas

---

-- 🧪 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) — Framework principal
- [Expo](https://expo.dev/) — Ambiente de execução
- [Firebase](https://firebase.google.com/) — Autenticação e Firestore
- [React Navigation](https://reactnavigation.org/) — Navegação entre telas
- [DummyJSON API](https://dummyjson.com/products) — API pública de produtos
- [Quicksand](https://fonts.google.com/specimen/Quicksand) — Fonte personalizada

---

-- 🧱 Estrutura do Projeto
/src
/components ← Componentes reutilizáveis (ex: Loading)
/screens ← Telas principais (Login, Dashboard, Detalhes, Perfil etc.)
/navigation ← Configurações de navegação (Stack e Drawer)
/services ← Firebase + API externa
/hooks ← Custom hook para produtos da API
App.js ← Entrada principal

---

-- 📦 Instalação

1. Clone este repositório:

git clone https://github.com/DaviLopesDeCarvalho/BazarShop.git
cd BazarShop

2. Instale as dependências:
```shell
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-gesture-handler react-native-reanimated
npm install react-native-screens react-native-safe-area-context
npm install @react-native-community/masked-view
npm install @react-native-picker/picker @react-native-community/slider
npx expo install @expo-google-fonts/quicksand
npm install firebase
```
4. Execute o projeto:
npx expo start

-- 📱 Protótipo (Figma):
https://www.figma.com/design/SbSKaijWwUxROxQoIgBUo6/Prot%C3%B3tipo-N%C3%A3o-Funcional-App-BazarShop?node-id=0-1&t=NcZlVJ9ALU3rztmn-1&authuser=1

---

👤 Autor:
Desenvolvido com 💙 por Davi Lopes de Carvalho

