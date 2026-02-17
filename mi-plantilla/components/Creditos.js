import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';

export default function Creditos() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Ficha Técnica de la App</Text>
          
          <Text style={styles.label}>API utilizada:</Text>
          <Text style={styles.value}>Ghibli API (Vercel)</Text>
          
          <Text style={styles.label}>URL:</Text>
          <Text style={styles.link}>https://ghibliapi.vercel.app/films/</Text>
          
          <Text style={styles.label}>Datos obtenidos:</Text>
          <Text style={styles.value}>Formato JSON (objetos con títulos, descripciones y URLs de imágenes).</Text>
          
          
          <Text style={styles.justificacion}>
            Uso Educativo: Esta app se ha diseñado para aprender a consumir servicios REST y gestionar estados con React Native.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#EBF4F6' },
  card: { borderRadius: 10, elevation: 3 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#e21f50', textAlign: 'center' },
  label: { fontWeight: 'bold', marginTop: 10, color: '#333' },
  value: { marginBottom: 10, color: '#555' },
  link: { color: '#3D45AA', fontSize: 13, marginBottom: 10 },
  justificacion: { marginTop: 50, fontStyle: 'italic', textAlign: 'center', color: '#777' }
});