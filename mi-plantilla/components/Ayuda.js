import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { List, Divider } from "react-native-paper";
import { HelpCircle, Navigation, Layout, AlertCircle, MousePointer2 } from "lucide-react-native";

export default function Ayuda() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Guía de Usuario</Text>
      <Text style={styles.subtitle}>Elaborada por el alumnado</Text>

      <List.Section style={styles.section}>
        
        {/* EXPLICACIÓN DE NAVEGACIÓN */}
        <List.Accordion
          title="Navegación"
          left={props => <Navigation {...props} size={24} color="#e21f50" />}
          style={styles.accBox}
          titleStyle={styles.accTitle}
        >
          <Text style={styles.text}>
            Utiliza el menú inferior para moverte entre las pantallas principales. 
            Desde el catálogo, puedes pulsar en cualquier tarjeta para ver los detalles.
          </Text>
        </List.Accordion>

        {/* EXPLICACIÓN DE SECCIONES */}
        <List.Accordion
          title="Secciones de la App"
          left={props => <Layout {...props} size={24} color="#e21f50" />}
          style={styles.accBox}
          titleStyle={styles.accTitle}
        >
          <View style={styles.innerContent}>
            <Text style={styles.bullet}>• <Text style={styles.bold}>Inicio:</Text> Bienvenida a la App.</Text>
            <Text style={styles.bullet}>• <Text style={styles.bold}>Películas:</Text> Listado completo de Studio Ghibli.</Text>
            <Text style={styles.bullet}>• <Text style={styles.bold}>Créditos:</Text> Información técnica de la API.</Text>
            <Text style={styles.bullet}>• <Text style={styles.bold}>Ayuda:</Text> Esta guía de uso.</Text>
          </View>
        </List.Accordion>

        {/* INTERACCIÓN */}
        <List.Accordion
          title="Cómo interactuar"
          left={props => <MousePointer2 {...props} size={24} color="#e21f50" />}
          style={styles.accBox}
          titleStyle={styles.accTitle}
        >
          <Text style={styles.text}>
            Pulsa sobre las imágenes del catálogo para acceder a la ficha técnica. 
            En el detalle podrás ver la puntuación de Rotten Tomatoes y la sinopsis.
          </Text>
        </List.Accordion>

        {/* POSIBLES ERRORES */}
        <List.Accordion
          title="Posibles Errores"
          left={props => <AlertCircle {...props} size={24} color="#e21f50" />}
          style={styles.accBox}
          titleStyle={styles.accTitle}
        >
          <View style={styles.innerContent}>
            <Text style={styles.bold}>Error de carga:</Text>
            <Text style={styles.text}>Si no aparecen las películas, verifica tu conexión a internet, ya que los datos se obtienen en tiempo real.</Text>
            <Divider />
            <Text style={styles.bold}>Imágenes vacías:</Text>
            <Text style={styles.text}>Si ves cuadros en blanco, es posible que el servidor de la API esté saturado temporalmente.</Text>
          </View>
        </List.Accordion>

      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: "#EBF4F6", 
    padding: 20 
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#e21f50",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 20,
  },
  section: {
    paddingBottom: 40,
  },
  accBox: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  accTitle: {
    fontWeight: "bold",
    color: "#333",
  },
  innerContent: {
    padding: 15,
    backgroundColor: "#fafafa",
  },
  text: {
    padding: 15,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  bullet: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  bold: {
    fontWeight: "bold",
    color: "#333",
  },
});