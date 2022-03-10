/* eslint-disable react/self-closing-comp */
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(
    () => {
      setTimeout(() => {
        navigation.replace('MainApp');
      }, 3000);
    },
    {navigation},
  );
  return (
    <ImageBackground
      source={SplashBackground}
      style={styles.background}></ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#091B6F',
  },
  logo: {
    width: 359.46,
    height: 208,
    top: 432,
    left: 360,
  },
});
