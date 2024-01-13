import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import {height, moderateScaleVertical, textScale} from '../../theme/responsive';
import {IMAGES} from '../../assets/images';
import {FONT} from '../../assets/fonts';
import {COLOR} from '../../theme/colors';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'PokemonQuiz'}],
        }),
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={IMAGES.pokeball}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Text style={styles.title}>Welcome to PokeQuiz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.grayshade,
    rowGap: moderateScaleVertical(20),
    position: 'relative',
  },
  imgContainer: {
    width: '100%',
    height: height * 0.3,
  },
  title: {
    fontFamily: FONT.Poppins600,
    fontSize: textScale(24),
    color: COLOR.white,
    position: 'absolute',
    bottom: height * 0.1,
  },
});
