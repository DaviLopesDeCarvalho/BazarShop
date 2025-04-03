import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


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

export default function VideogamesConsolesScreem ({ navigation }) {

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
                    imagem={require('../assets/img/Videosgames/jogos.jpg')}
                    onPress={() => navigation.navigate('')}
                />
                <Card
                    titulo="Consoles"
                    descricao="PlayStation, Xbox, Nintendo..."
                    imagem={require('../assets/img/Videosgames/console.jpg')}
                    onPress={() => navigation.navigate('')}
                />
                <Card
                    titulo="Acessórios"
                    descricao="Controles, Headphones, Carregadores... "
                    imagem={require('../assets/img/Videosgames/Controles.jpg')}
                    onPress={() => navigation.navigate('')}
                />
            </View>
        </ScrollView>
    )
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
        shadowOffset: { width: 0, height: -3 },
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