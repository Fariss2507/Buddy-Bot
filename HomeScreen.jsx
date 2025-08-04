import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

export default function HomeScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fefefe' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}> Welcome to Buddy Bot</Text>
      <Text style={[styles.subtitle, { color: isDarkMode ? '#bbb' : '#444' }]}>Your smart AI assistant</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={[styles.button, { backgroundColor: isDarkMode ? '#ffd54f' : '#fbc02d' }]}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,

  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 10,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});
