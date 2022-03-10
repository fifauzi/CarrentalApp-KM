/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageAkun} from '../../assets';

export default function Akun() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akun</Text>
      <View style={styles.content}>
        <Image source={ImageAkun} />
        <Text style={{alignContent: 'center'}}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </Text>

        <TouchableOpacity style={styles.container2}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginLeft: 18,
    marginTop: 24,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },

  container2: {
    backgroundColor: '#5CB85F',
    marginLeft: 24,
    borderRadius: 2,
    width: 109,
    height: 28,
    marginTop: 16,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
