import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../screens/ProductList';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="DetailProduct" component={Product} />
    </Stack.Navigator>
  );
}
