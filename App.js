import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DestinationScreen from './screens/DestinationScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppNavigation />
  );
}




function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

