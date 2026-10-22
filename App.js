import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Home from './home';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Gagal', 'Email dan password harus diisi');
      return;
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Home onLogout={handleLogout} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY APP{'\n'}UTS MOBILE 1</Text>

      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="INPUT EMAIL"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="INPUT PASSWORD"
        secureTextEntry
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>TOMBOL LOGIN</Text>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    color: 'gray',
    fontWeight: 'bold',
  },
  textInput: {
    width: '50%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});