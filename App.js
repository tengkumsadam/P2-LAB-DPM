import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Tengku Muhammad Sadam</Text>

      {/* Dua kotak dengan tata letak Flexbox */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '70%', // Lebar kontainer diatur
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#800000', // Warna maroon
    borderRadius: 10, // Sudut melengkung
    elevation: 5, // Bayangan untuk Android
    shadowColor: '#000', // Warna bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: 'center', // Isi berada di tengah secara vertikal
    alignItems: 'center', // Isi berada di tengah secara horizontal
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#654321', // Warna coklat tua
    borderRadius: 10, // Sudut melengkung
    elevation: 5, // Bayangan untuk Android
    shadowColor: '#000', // Warna bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: 'center', // Isi berada di tengah secara vertikal
    alignItems: 'center', // Isi berada di tengah secara horizontal
  },
});
