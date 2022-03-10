import {StyleSheet, Text, View, TouchableOpacity, Icon} from 'react-native';
import React from 'react';
import {Svg, Circle} from 'react-native-svg';
import {
  IconAkun,
  IconAkunActive,
  IconHome,
  IconHomeActive,
  IconDaftar,
  IconDaftarActive,
} from '../../assets/Icons';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === 'DaftarMobil')
      return isFocused ? <IconDaftarActive /> : <IconDaftar />;

    if (label === 'Akun') return isFocused ? <IconAkunActive /> : <IconAkun />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
