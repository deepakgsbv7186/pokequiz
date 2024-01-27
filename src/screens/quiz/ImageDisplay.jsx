import {StyleSheet, View} from 'react-native';
import React from 'react';
import {height} from '../../theme/responsive';
import FastImage from 'react-native-fast-image';

export default function ImageDisplay({img}) {
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: img}}
        style={{width: img ? '100%' : '20%', height: img ? '100%' : '20%'}}
        resizeMode={FastImage.resizeMode.contain}
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
