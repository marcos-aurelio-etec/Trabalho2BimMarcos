import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Sobre from './Sobre';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if(page === 'home') {
            return(
                <View style={styles.container}>
                    <Text style={styles.title1}>NavTrack</Text>
                    <Text style={styles.title}>Navegue com confiança e rastreie sua</Text>
                    <Text style={styles.title}>localização em tempo real!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Clique Aqui</Text>
                    </TouchableOpacity>
                </View>
            )
        }else if(page === 'sobre') {
            return <Sobre />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title1: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
  });
  