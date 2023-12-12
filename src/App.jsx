import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './navigations/RouteNavigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
