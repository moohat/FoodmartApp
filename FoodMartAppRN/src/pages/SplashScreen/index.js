import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/Ilustration';

const SplashScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC700',
        flex: 1,
      }}>
      <Logo />
      <View style={{height:38}} />
      <Text style={{fontSize: 32, color: '#020202', fontFamily:'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
