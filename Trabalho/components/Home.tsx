import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Sobre from './Sobre';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if(page === 'home') {
            return(
                <View style={styles.container}>
                    <Text style={styles.title1}>localisa-se</Text>
                    <Text style={styles.title}>aqui na localisa-se voce se acha sem estar perdido </Text>
                    <Text style={styles.title}>localiza-se aqui </Text>
                    
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>se ache</Text>
                    
                    </TouchableOpacity>
                    <br></br>
                    
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
      backgroundColor: '00001A',
      color: '00001A',
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
  