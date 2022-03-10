/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import React from 'react';
import {fi_box, fi_camera, fi_key, fi_truck, rafi, banner} from '../../assets';
import CardMobil from '../../components/CardMobil';
import Card from '../../components/Card';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#D3D9FD'} barStyle={'dark-content'} />
      <View style={styles.topNav}>
        <View style={styles.topNavContainer}>
          <View style={styles.topNavLeft}>
            <Text>Hi, Rafi</Text>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>
              Bandung City
            </Text>
          </View>
          <View style={styles.topNavRight}>
            <Image
              source={rafi}
              style={styles.topNavRight}
              resizeMode={'cover'}
            />
          </View>
        </View>
      </View>

      <ImageBackground
        source={banner}
        style={styles.middleNav}
        resizeMode="contain"
      />

      <View style={styles.middleCardNav}>
        <Card judul={'Sewa Mobil'} gambar={fi_truck} />
        <Card judul={'Oleh-oleh'} gambar={fi_box} />
        <Card judul={'Penginapan'} gambar={fi_key} />
        <Card judul={'Wisata'} gambar={fi_camera} />
      </View>

      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontFamily: 'Poppins-Bold',
          marginHorizontal: 20,
          color: 'black',
        }}>
        Daftar Mobil Pilihan
      </Text>

      <ScrollView style={styles.scroll}>
        <CardMobil />
        <CardMobil />
        <CardMobil />
        <CardMobil />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNav: {
    backgroundColor: '#D3D9FD',
    height: 176,
  },
  topNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  topNavLeft: {},
  topNavRight: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 20,
  },
  middleNav: {
    height: 160,
    marginHorizontal: 20,
    marginTop: -70,
    alignItems: 'center',
  },
  middleCardNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  scroll: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
