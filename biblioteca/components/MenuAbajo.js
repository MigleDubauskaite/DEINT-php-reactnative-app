import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Home, Book, HelpCircle } from "lucide-react-native"; 

export default function MenuAbajo() {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Home color="#3D45AA" size={26} />
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate('Libros')}>
        <Book color="#3D45AA" size={26} />
      </Pressable>
      
      <Pressable onPress={() => navigation.navigate('Ayuda')}>
        <HelpCircle color="#3D45AA" size={26} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  }
});