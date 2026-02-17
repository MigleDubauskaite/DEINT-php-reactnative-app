import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import MenuAbajo from "./components/MenuAbajo";
import Home from "./components/Home";
import Ayuda from "./components/Ayuda";
import DetallePelicula from "./components/DetallePelicula";
import Creditos from "./components/Creditos";
import Peliculas from "./components/Peliculas";

const Estac = createNativeStackNavigator();

export default function App() {
  return (
    
    // Envolvemos TODO con PaperProvider

    /* Es el encargado de propagar el "estilo" a todos los componentes de la librería. 
    Sin el PaperProvider, los componentes como Button, Card o Chip 
    no sabrían qué colores, fuentes o bordes redondeados utilizar. 
    Permite que toda la aplicación tenga una estética coherente */
    <PaperProvider>
      <NavigationContainer>
        <Principal />
      </NavigationContainer>
    </PaperProvider>
  );
}

function Principal() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Estac.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Estac.Screen name="Home" component={Home} />
          <Estac.Screen name="Peliculas" component={Peliculas} />
          <Estac.Screen name="DetallePelicula" component={DetallePelicula} />
          <Estac.Screen name="Creditos" component={Creditos} />
          <Estac.Screen name="Ayuda" component={Ayuda} />
        </Estac.Navigator>
      </View>
      <MenuAbajo />
    </View>
  );
}
