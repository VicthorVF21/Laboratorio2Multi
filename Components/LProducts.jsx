import React, {useEffect, useState} from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/FirebaseConf';

export default function LProducts() {

    const nav = useNavigation();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function fetchDataProduct() {
          const productosList = [];
          const querySnapshot = await db.collection('Products').get();
          querySnapshot.forEach(doc => {
            productosList.push({ id: doc.id, ...doc.data() });
          });
          setProductos(productosList);
        };
    
        fetchDataProduct();
      }, []);
    
    function handleProductPress(producto){
        nav.navigate('EProduct', { producto });
      };

  return (
    <View style={styles.container}>
       <ImageBackground 
        source={require('../assets/img_fondo.jpg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
        <Image style={styles.LogoFruit} source={require('../assets/logo_fruit.png')}/>
        </View>
        <View style={styles.formContainer}>
        <ScrollView>
          {productos.map(producto => (
            <TouchableOpacity key={producto.id} style={styles.button} onPress={() => handleProductPress(producto)}>
              <Text style={styles.buttonText}>Código: {producto.CodigoP}</Text>
              <Text style={styles.buttonText}>Nombre: {producto.Nombre}</Text>
              <Text style={styles.buttonText}>Cantidad: {producto.Cantidad}</Text>
              <Text style={styles.buttonText}>Fecha de caducidad: {producto.FechaCaducidad}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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

   formContainer: {
    width: '95%',
    height: '50%',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
  },
   logoContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 50,
  },
  LogoFruit: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    height: 200,
    width: 200,
  },
   button: {
     backgroundColor: '#871F1F',
     borderRadius: 20,
     padding: '5%',
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