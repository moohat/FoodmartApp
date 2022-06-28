import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
