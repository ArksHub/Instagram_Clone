import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNav from '../BottomNavigator/BottomNav';

export default function StackNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNavigation" component={BottomNav} />
    </Stack.Navigator>
  );
}
