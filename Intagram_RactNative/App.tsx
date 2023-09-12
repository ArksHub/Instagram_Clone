import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNav from './src/navigation/StackNavigator/StackNav';

export default function App() {
  const Auth = createStackNavigator();
  return (
    <NavigationContainer>
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="AuthStack" component={StackNav} />
      </Auth.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
