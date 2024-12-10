import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useRoute } from '@react-navigation/native';

const QRcodeScreen = ({ navigation }) => {
    const route = useRoute();
    const { qrCodeValue, participantes } = route.params; // Obtém os dados passados
    
    const avatarImages = {
        1: require('./assets/avatares/1.jpg'),
        2: require('./assets/avatares/2.jpg'),
        3: require('./assets/avatares/3.jpg'),
        4: require('./assets/avatares/4.jpg'),
        5: require('./assets/avatares/5.jpg'),
        6: require('./assets/avatares/6.jpg'),
        7: require('./assets/avatares/7.jpg'),
        8: require('./assets/avatares/8.jpg'),
        9: require('./assets/avatares/9.jpg'),
        10: require('./assets/avatares/10.jpg'),
        11: require('./assets/avatares/11.jpg'),
    };

    // Função para obter a imagem do avatar com base no ID
    const getAvatarImage = (id) => {
        return avatarImages[id] || require('./assets/avatares/6.jpg'); // Retorna uma imagem padrão se não encontrar
    };

    return (
        <View style={styles.container}>
            <Text style={styles.voltar} onPress={() => navigation.goBack()}>Voltar</Text>
            <View style={styles.qrcode}>
                <Text style={styles.text}>Seu convite digital</Text>
                {/* Exibe o QR Code gerado com o valor recebido */}
                <View style={{ backgroundColor: '#fff', padding: 10 }}>
                    <QRCode
                        value={qrCodeValue} // Valor para o QR Code
                        size={200} // Tamanho do QR Code
                    />
                </View>
            </View>

            <View style={styles.boxParticipantes}>
                <Text style={styles.participantesTitle}>Participantes:</Text>
                <ScrollView>
                    {participantes && participantes.length > 0 ? (
                        participantes.map((participante, index) => (
                            <View key={index} style={styles.participanteContainer}>
                                {/* Exibe a imagem do avatar */}
                                <Image
                                    source={require('./assets/icons/userImg.png')}
                                    style={styles.avatar}
                                />
                                <View style={styles.participanteInfo}>
                                    <Text style={styles.participanteText}>
                                        {participante.fullName}
                                    </Text>
                                    <Text style={styles.participanteText}>
                                        {participante.email}
                                    </Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noParticipantsText}>Nenhum participante encontrado.</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    voltar: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10

    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Manrope-Bold',
        color: 'white',
        textAlign: 'center'
    },
    qrcode: {
        marginBottom: 50,
    },
    boxParticipantes: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    participantesTitle: {
        fontSize: 26,
        fontFamily: 'Manrope-Bold',
        marginBottom: 10,
        color: '#fff'
    },
    participanteContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
    },
    participanteInfo: {
        marginLeft: 10,
    },
    participanteText: {
        fontSize: 16,
        color: '#fff',
    },
    noParticipantsText: {
        fontSize: 16,
        color: '#888',
    },
    avatar: {
        width: 40,
        height: 40,
        tintColor: '#fff',
        borderRadius: 20,
    }
});

export default QRcodeScreen;
