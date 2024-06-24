import React from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {

    const nav = useNavigation();

  return (
    <View style={styles.container}>
       <ImageBackground 
        source={require('../assets/img_fondo.jpg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
        <Image style={styles.LogoFruit} source={require('../assets/logo_fruit.png')}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('RProduct')}>
          <Text style={styles.buttonText}>Registrar Producto</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => nav.navigate('LProduct')}>
          <Text style={styles.buttonText}>Listar Producto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('AprenderMas')}>
          <Text style={styles.buttonText}>Aprender+ </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   justifyContent: 'center',
   width: '100%',
   height: '100%',
     },
  backgroundImage: {
   flex: 1,
  
  justifyContent: 'center',
    alignItems: 'center',
   },
   logoContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 50,
  },
  LogoFruit: {
    position: 'absolute',
    bottom: 65,
    left: 0,
    height: 200,
    width: 200,
  },
   button: {
     width: '90%',
     height: 60,
     backgroundColor: '#871F1F',
     borderRadius: 25,
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 45,
   },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center'
  },
  footerRegis:{
    flexDirection: 'row'
    
  },
  footerText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
});