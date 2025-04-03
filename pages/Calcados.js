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

export default function CalcadosScreem({ navigation }) {

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
                    imagem={require('../assets/img/Calcados/tenis.jpg')}
                    onPress={() => navigation.navigate('')}
                />
                <Card
                    titulo="Botas"
                    descricao="Coturno, galocha, cano alto... "
                    imagem={require('../assets/img/Calcados/botas.jpg')}
                    onPress={() => navigation.navigate('')}
                />
                <Card
                    titulo="Sandálias e Chinelos"
                    descricao="Rasterinhas, chinelos... "
                    imagem={require('../assets/img/Calcados/sandalias.jpg')}
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