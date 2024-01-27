import {StyleSheet, View} from 'react-native';
import React from 'react';
import {height} from '../../theme/responsive';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

export default function ImageDisplay() {
  const {currentPokemon} = useSelector(state => state.pokemon);
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: currentPokemon?.imgURL}}
        style={{
          width: currentPokemon?.imgURL ? '100%' : '20%',
          height: currentPokemon?.imgURL ? '100%' : '20%',
        }}
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
