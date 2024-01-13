import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonQuiz from '../screens/quiz';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="PokemonQuiz"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PokemonQuiz" component={PokemonQuiz} />
    </Stack.Navigator>
  );
}
