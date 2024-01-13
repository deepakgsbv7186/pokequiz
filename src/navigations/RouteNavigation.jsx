import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../screens/ProductList';
import Product from '../screens/Product';
import ScreenTest from '../screens/AppUsage/ScreenTest';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="ScreenTest"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="DetailProduct" component={Product} />
      <Stack.Screen name="ScreenTest" component={ScreenTest} />
    </Stack.Navigator>
  );
}
