import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME PAGE</Text>

      <View style={styles.profileBox}>
        <View style={styles.photo}>
            <img src="FotoProfil.png" alt="Profile" style={{ width: 80, height: 80 }} />
        </View>
        <Text style={styles.name}>Andika Hendro Widodo</Text>
      </View>

      <View style={styles.menuGrid}>
  <TouchableOpacity style={styles.menuItem}>
    <Text>Profil</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Text>Jadwal</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Text>Nilai</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Text>Pengaturan</Text>
  </TouchableOpacity>
</View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text>TOMBOL LOGOUT</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6d4de',
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  profileBox: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 25,
  },
  photo: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  photoText: {
    textAlign: 'center',
    fontSize: 12,
  },
  name: {
    fontSize: 12,
  },
  menuGrid: {
    width: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  menuItem: {
    width: '48%',
    height: 60,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 20,
  },
});