import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {height} from '../../theme/responsive';
import {IMAGES} from '../../assets/images';

export default function ImageDisplay({img}) {
  return (
    <View style={styles.container}>
      <Image
        source={img ? img : IMAGES.loading}
        resizeMode="contain"
        resizeMethod="scale"
        style={{width: img ? '100%' : '20%', height: img ? '100%' : '20%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
