import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar, Alert } from 'react-native';
import { db } from '../config/FirebaseConf';

export default function RegistrarProduct() {

    const [Nombre, setNombre] = useState('');
    const [Codigo, setCodigo] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [FechaCaducidad, setFechaCaducidad] = useState('');
  
    async function handleRegister(){
        if (!Nombre || !Codigo || !Cantidad || !FechaCaducidad) {
          Alert.alert('Error', 'No se han llenado todos los campos');
          return;
        }
    
        try {
          await db.collection('Products').add({
            Nombre,
            CodigoP: Codigo,
            Cantidad: Cantidad,
            FechaCaducidad
          });
          Alert.alert('Éxito', 'Producto registrado correctamente');
          setNombre('');
          setCodigo('');
          setCantidad('');
          setFechaCaducidad('');
        } catch (error) {
          Alert.alert('Error', 'Hubo un problema al registrar el producto');
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
            <Text style={styles.title}>Productos</Text>
            <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#888888"
            value={Nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Codigo Producto"
            placeholderTextColor="#888888"
            value={Codigo}
            onChangeText={setCodigo}
          />
          <TextInput
            style={styles.input}
            placeholder="Cantidad"
            placeholderTextColor="#888888"
            value={Cantidad}
            onChangeText={setCantidad}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha Caducidad"
            placeholderTextColor="#888888"
            value={FechaCaducidad}
            onChangeText={setFechaCaducidad}
          />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Guardar</Text>
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
