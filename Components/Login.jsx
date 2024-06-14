import React from 'react';
import { StyleSheet, Text,Image, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

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
        <TextInput
          style={styles.input}
          placeholder="correo electrónico"
          placeholderTextColor="#837B7B"
        />
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          placeholderTextColor="#837B7B"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
           <View style={styles.footerRegis}>
          <Text style={styles.footerText}>Crear Cuenta nueva</Text>
          <TouchableOpacity onPress={() => nav.navigate('Registrar')}>
            <Text style={styles.footerText}> Regístrate</Text>
            </TouchableOpacity>
          </View> 
          <Text style={styles.footerText}>Olvidó contraseña?</Text>
        </View>
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
    bottom: 98,
    left: 0,
    height: 200,
    width: 200,
  },

   input: {
     width: '80%',
     height: 50,
     backgroundColor: '#D9D9D9',
     borderRadius: 25,
     paddingHorizontal: 20,
     marginVertical: 10,
    color: '#837B7B',
    fontSize: 20,
    fontWeight: 'bold',
   },
   button: {
     width: '70%',
     height: 50,
     backgroundColor: '#871F1F',
     borderRadius: 25,
     justifyContent: 'center',
     alignItems: 'center',
     marginVertical: 10,
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