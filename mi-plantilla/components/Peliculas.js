import { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions
} from "react-native";

// Importamos Card de React Native Paper para el diseño profesional
import { Card } from "react-native-paper";

// Hook necesario para saltar a la pantalla de detalle
import { useNavigation } from "@react-navigation/native";

// --- CONFIGURACIÓN DE DISEÑO ---
// Sacamos el ancho de la pantalla para que las tarjetas sean responsivas
const { width } = Dimensions.get("window");


// URL de la API (nuestro servidor de datos)
const API_BASE = "https://ghibliapi.vercel.app/films/";

export default function Peliculas() {
  // --- ESTADOS (La memoria de la pantalla) ---
  const [lista, setLista] = useState([]);      // Aquí guardamos el array de pelis que nos dé la API
  const [cargando, setCargando] = useState(true); // Para saber si estamos esperando al servidor
  const [error, setError] = useState(null);      // Para guardar mensajes de fallo si el WiFi muere
  
  // Hook para poder usar el comando "navigation.navigate"
  const navigation = useNavigation();
  
  // un flujo asíncrono
  // --- LÓGICA DE CARGA (useEffect) ---
  useEffect(() => {
    // Función asíncrona: no sabemos cuánto tardará internet, así que "esperamos" (await)
    const cargarDatos = async () => {
      try {
        // 1. Intentamos la petición
        // uso async/await para que la app no se bloquee mientras espera. 
        const res = await fetch(API_BASE);

        // 2. Control de Errores: ¿El servidor ha respondido con un OK (200)?
        if (!res.ok) throw new Error("Error en la respuesta del servidor");

        // 3. Traducimos la respuesta a JSON (un formato que JS entiende)
        /*
        Una vez recibo la respuesta, la paso por .json() 
        para convertir esos datos en bruto en un array de objetos con el que JS pueda trabajar.
        */
        const json = await res.json();
        
        // 4. Guardamos el resultado en nuestro estado "lista"
        setLista(json);
      } catch (e) {
        // 5. Catch: Si algo falla (sin internet, URL mal escrita...), lo guardamos aquí
        setError("No se pudieron cargar las películas. Revisa tu conexión.");
        console.error("Error API:", e);
      } finally {
        // 6. Finalmente: Pase lo que pase, dejamos de cargar (quitamos el spinner)
        setCargando(false);
      }
    };

    cargarDatos();
  }, []); // [] significa: Ejecuta esto SOLO una vez al abrir la pantalla

  // --- RENDERIZADO CONDICIONAL (UX) ---

  // 1. Pantalla de carga: Si "cargando" es true, mostramos el circulito (ActivityIndicator)
  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e21f50" />
        <Text style={{ marginTop: 10 }}>Cargando películas...</Text>
      </View>
    );
  }

  // 2. Pantalla de error: Si el estado "error" tiene algo, mostramos el mensaje en rojo
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

  // --- DISEÑO PRINCIPAL (Lo que se ve si todo va bien) ---
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Catálogo Ghibli</Text>
      
      {/* Feedback para el usuario: cuántos elementos hemos traído */}
      <Text style={styles.peliculasEncontradas}>
        Películas encontradas: {lista.length}
      </Text>

      {/* Grid: Contenedor para que las tarjetas se vean en columnas */}
      <View style={styles.grid}>
        
        {/* .map(): Recorremos el array "lista" y por cada objeto creamos una Card */}
        {lista.map((pelicula) => (
          <Card
            key={pelicula.id} // ID único para que React no se lie al mover elementos
            style={styles.card}
            // Al pulsar, navegamos pasando el objeto "peli" entero como parámetro
            onPress={() =>
              navigation.navigate("DetallePelicula", { peli: pelicula })
            }
          >
            {/* Portada de la película desde la URL de la API */}
            <Card.Cover source={{ uri: pelicula.image }} style={styles.cover} />

            {/* Contenido de la tarjeta de React Native Paper */}
            <Card.Content style={styles.cardContent}>
              <Text style={styles.itemTitle}>{pelicula.title}</Text>
              <Text style={styles.itemDirector}>
                Director: {pelicula.director}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

// --- ESTILOS (El CSS de nuestro componente) ---
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5FBE6",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e21f50",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row", // Elementos en fila
    flexWrap: "wrap",      // Si no caben, que bajen a la siguiente línea
    paddingHorizontal: 10, 
    justifyContent: "space-around", // Espacio equilibrado entre columnas
  },
  card: {
    // Decisiones de diseño: el 44% del ancho para que queden dos columnas y respire
    width: width * 0.44, 
    marginBottom: 25,
    backgroundColor: "#FFF",
    borderRadius: 12,
    elevation: 4, // Sombrita para que parezca que flota (Material Design)
  },
  cover: {
    height: width * 0.6, // Altura proporcional para que parezca un póster de cine
  },
  cardContent: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  itemDirector: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
});