import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AprenderMas() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch('https://www.fruityvice.com/api/fruit/all');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron obtener los productos');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleSearch (text) {
    setSearch(text);
  };

  function toggleFavorite(product) {
    if (favorites.includes(product.name)) {
      setFavorites(favorites.filter(fav => fav !== product.name));
    } else {
      setFavorites([...favorites, product.name]);
    }
  };

  function renderProduct({ item }){
    const isFavorite = favorites.includes(item.name);
    return (
      <View style={styles.productContainer}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productFamily}>Familia: {item.family}</Text>
          <Text style={styles.productNutritional}>Calorías: {item.nutritions.calories}</Text>
          <Text style={styles.productNutritional}>Carbohidratos: {item.nutritions.carbohydrates}</Text>
          <Text style={styles.productNutritional}>Grasa: {item.nutritions.fat}</Text>
          <Text style={styles.productNutritional}>Proteína: {item.nutritions.protein}</Text>
          <Text style={styles.productNutritional}>Azúcar: {item.nutritions.sugar}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          <Icon name={isFavorite ? 'heart' : 'heart-o'} size={30} color="#900" />
        </TouchableOpacity>
      </View>
    );
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar producto..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productFamily: {
    fontSize: 16,
  },
  productNutritional: {
    fontSize: 14,
  },
});
