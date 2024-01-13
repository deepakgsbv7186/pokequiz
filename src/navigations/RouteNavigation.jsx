import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonQuiz from '../screens/quiz';
import SplashScreen from '../screens/auth/SplashScreen';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="PokemonQuiz" component={PokemonQuiz} />
    </Stack.Navigator>
  );
}
