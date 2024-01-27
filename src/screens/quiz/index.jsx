import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../theme/colors';
import {moderateScale, moderateScaleVertical} from '../../theme/responsive';
import {FONT} from '../../assets/fonts';
import Buttons from '../../components/Buttons';
import Header from '../../components/Header';
import EarnPoints from './EarnPoints';
import ImageDisplay from './ImageDisplay';
import OptionsDisplay from './OptionsDisplay';
import {fetchPokemon} from '../../api';

export default function PokemonQuiz() {
  const [loading, setLoading] = useState(true);
  const [displayPokemon, setDisplayPokemon] = useState(null);
  const getRandomPokeName = async () => {
    const response = await fetchPokemon();
    setDisplayPokemon({
      name: response?.name,
      imgURL: response?.sprites?.other?.['official-artwork']?.front_default,
    });
    setLoading(false);
  };
  useEffect(() => {
    getRandomPokeName();
  }, []);
  console.log(displayPokemon);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={'Pokemon Quiz'}
          bgColor={COLOR.bulelabeltext}
          headerContainerStyle={{marginTop: moderateScaleVertical(20)}}
        />
        <EarnPoints points={100} />

        {loading ? (
          <ActivityIndicator size={'small'} color={COLOR.white} />
        ) : (
          <ImageDisplay img={displayPokemon?.imgURL} />
        )}
        <Text style={styles.taptochoose}>Tap to choose</Text>
        <OptionsDisplay />
      </ScrollView>
      <Buttons
        title={'Skip'}
        bgColor={COLOR.blackOpacity40}
        btnContainerStyle={styles.skipbtn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLOR.grayshade,
    paddingHorizontal: moderateScale(10),
    position: 'relative',
  },
  taptochoose: {
    textAlign: 'center',
    fontFamily: FONT.Poppins400,
    fontSize: 14,
    marginVertical: moderateScaleVertical(20),
  },
  skipbtn: {
    position: 'absolute',
    bottom: moderateScaleVertical(20),
    left: moderateScale(10),
    right: moderateScale(10),
  },
});
