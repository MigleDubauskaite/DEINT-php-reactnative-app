import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Film } from "lucide-react-native"; 
import { Button } from "react-native-paper"; 

const { width } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Image 
          source={require("../assets/foto.png")} 
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.title}>Ghibli App</Text>
        <Text style={styles.subtitle}>
          Explora el mundo mágico de Studio Ghibli y sus películas.
        </Text>

        {/* Usamos Button de Paper para cumplir requisitos */}
        <Button 
          mode="contained" 
          icon={() => <Film color="#FFF7CD" size={20} />}
          onPress={() => navigation.navigate('Peliculas')} 
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Explorar Pelis
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#EBF4F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    width: '100%',
  },
  img: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e21f50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#e21f50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFF7CD",
    fontWeight: "bold",
    fontSize: 16,
  },
});