import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar, Alert } from 'react-native';

export default function Registrar() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [comprobarContrasena, setComprobarContrasena] = useState('');
  
    async function handleRegister(){
        if (contrasena !== comprobarContrasena) {
          Alert.alert('Error', 'Las contraseñas no coinciden');
          return;
        }
    
        try {
          await db.collection('Users').add({
            nombre: nombre,
            correo: correo,
            contrasena: contrasena,
          });
          Alert.alert('Éxito', 'Usuario registrado correctamente');
        } catch (error) {
          Alert.alert('Error', 'Hubo un problema al registrar el usuario');
        }
      };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
       source={require('../assets/img_fondo.jpg')} 
        style={styles.backgroundImage}
      >
        
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>fruit</Text>
            <Text style={styles.logoTextSmall}>.nl</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Crear cuenta nueva</Text>
            <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#888888"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#888888"
            value={correo}
            onChangeText={setCorreo}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#888888"
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
          />
          <TextInput
            style={styles.input}
            placeholder="Comprobar contraseña"
            placeholderTextColor="#888888"
            secureTextEntry
            value={comprobarContrasena}
            onChangeText={setComprobarContrasena}
          />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
       
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '30%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },
  logoTextSmall: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    color: '#000000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
