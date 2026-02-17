import { ScrollView, StyleSheet, View, Image, Dimensions } from "react-native";
import { Text, Divider, Chip, Card } from "react-native-paper";

const { width } = Dimensions.get("window");
export default function DetallePelicula({ route }) {
  // PELI >> viene de componente Peliculas.js
  const { peli } = route.params; // Recibimos la peli seleccionada

  return (
    <ScrollView style={styles.container}>
      <Card.Cover source={{ uri: peli.image }} style={styles.cover} />
      <Text style={styles.title}>{peli.title}</Text>
      <Text style={styles.original}>{peli.original_title_romanised}</Text>

      <View style={styles.row}>
        <Chip icon="calendar">{peli.release_date}</Chip>
        <Chip icon="clock">{peli.running_time} min</Chip>
        <Chip icon="star">{peli.rt_score}/100</Chip>
      </View>

      <Divider style={styles.divider} />

      <Text style={styles.label}>
        Director: <Text style={styles.value}>{peli.director}</Text>
      </Text>
      <Text style={styles.label}>
        Productor: <Text style={styles.value}>{peli.producer}</Text>
      </Text>

      <Divider style={styles.divider} />

      <Text style={styles.desc}>{peli.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  banner: {
    width: width,
    height: 250, // Altura fija para el banner superior
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e21f50",
  },
  original: {
    fontSize: 18,
    color: "#666",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  divider: {
    marginVertical: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontWeight: "normal",
    color: "#555",
  },
  desc: {
    lineHeight: 22,
    fontSize: 15,
    textAlign: "justify",
  },
});
