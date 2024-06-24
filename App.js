import { StyleSheet} from 'react-native';
import Login from './Components/Login';
import Registrar from './Components/Registrar';
import Inicio from './Components/Inicio';
import RegistrarProduct from './Components/RegistrarProduct';
import LProducts from './Components/LProducts';
import EditProduct from './Components/EditProduct';
import AprenderMas from './Components/AprenderMas';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Registrar" component={Registrar} options={{ headerShown: false }} />
      <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
      <Stack.Screen name="RProduct" component={RegistrarProduct} options={{ headerShown: false }} />
      <Stack.Screen name="LProduct" component={LProducts} options={{ headerShown: false }} />
      <Stack.Screen name="EProduct" component={EditProduct} options={{ headerShown: false }} />
      <Stack.Screen name="AprenderMas" component={AprenderMas} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
