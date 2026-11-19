import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';

export default function SplashScreenView() {
  return (
    <View style={styles.container}>
      {/* Unga App Logo */}
      <Image 
        source={require('../../assets/images/icon.png')} 
        style={styles.logo} 
      />

      {/* Unga Custom Content / App Name */}
      <Text style={styles.title}>My Todo App</Text>
      <Text style={styles.subtitle}>Organize your daily life ✨</Text>

      {/* Round Loading Spinner */}
      <ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />

      {/* Bottom Footer */}
      <Text style={styles.footer}>Powered by React Native & Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2563eb', // Unga brand blue color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bfdbfe',
    marginTop: 6,
  },
  spinner: {
    marginTop: 35,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 12,
    color: '#93c5fd',
  },
});