import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuAbajo from './components/MenuAbajo';
import Home from './components/Home';
import Libros from './components/Biblioteca';
import Ayuda from './components/Ayuda';

const Estac = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Principal />
    </NavigationContainer>
  );
}

function Principal() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Estac.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Estac.Screen name="Home" component={Home} />
          <Estac.Screen name="Libros" component={Libros} />
          <Estac.Screen name="Ayuda" component={Ayuda} />
        </Estac.Navigator>
      </View>

      {/* Menú fijo abajo */}
      <MenuAbajo />
    </View>
  );
}