import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as LucideIcons from "lucide-react-native";

export default function Ayuda() {
  const [documentacion, setDocumentacion] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Pedimos la documentación al NUEVO archivo PHP en formato JSON
    fetch("http://localhost:6060/documentacion.php?format=json")
      .then((res) => res.json())
      .then((json) => {
        setDocumentacion(json);
        setCargando(false);
      })
      .catch((err) => console.error("Error al cargar la ayuda:", err));
  }, []);

  if (cargando) {
    return (
      <ActivityIndicator
        size="large"
        color="#3D45AA"
        style={{ marginTop: 50 }}
      />
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Documentación</Text>

      {documentacion.map((item, index) => {
        // Obtenemos el icono dinámicamente según el nombre que viene del PHP
        const Icono = LucideIcons[item.icono] || LucideIcons.HelpCircle;

        return (
          <View key={index} style={styles.card}>
            <View style={styles.iconBox}>
              <Icono color="#3D45AA" size={24} />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.cardTitle}>{item.seccion}</Text>
              <Text style={styles.cardDesc}>{item.descripcion}</Text>
              <Text style={styles.cardDetail}>{item.detalles}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#EBF4F6", padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3D45AA",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  iconBox: { marginRight: 15, justifyContent: "center" },
  textBox: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  cardDesc: { fontSize: 14, color: "#666", marginTop: 4 },
  cardDetail: {
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
    marginTop: 4,
  },
});
