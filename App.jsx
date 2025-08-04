import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen
  name="Chat"
  component={ChatScreen}
  options={{
    title: 'Buddy Bot Assistant',
    headerTintColor: '#FFC107',                    
    headerStyle: { backgroundColor: '#121212' },   
  }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
