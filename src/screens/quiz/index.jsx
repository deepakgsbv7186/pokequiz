import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HapticFeedback from 'react-native-haptic-feedback';
import {COLOR} from '../../theme/colors';
import {moderateScale, moderateScaleVertical} from '../../theme/responsive';
import {FONT} from '../../assets/fonts';
import Buttons from '../../components/Buttons';
import Header from '../../components/Header';
import EarnPoints from './EarnPoints';
import ImageDisplay from './ImageDisplay';
import OptionsDisplay from './OptionsDisplay';
import {fetchRandomPokemon} from '../../api';
import {
  decreasePoints,
  resetPoints,
  setOptions,
  setPokemon,
} from '../../redux/pokemon/pokemonSlice';

export default function PokemonQuiz() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {points} = useSelector(state => state.pokemon);
  const loadNextQuestion = async () => {
    const response = await fetchRandomPokemon();
    const correctOption = response?.name;
    const incorrectOptions = Array.from(
      {length: 3},
      async () => (await fetchRandomPokemon())?.name,
    );
    const options = await Promise.all([correctOption, ...incorrectOptions]);
    dispatch(
      setPokemon({
        name: response?.name,
        imgURL: response?.sprites?.other?.['official-artwork']?.front_default,
      }),
    );
    dispatch(setOptions(options?.sort(() => Math.random() - 0.5)));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      loadNextQuestion();
    }, 2000);

    return () => clearTimeout(timer);
  }, [points]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <Header
          title={'Pokemon Quiz'}
          bgColor={COLOR.bulelabeltext}
          headerContainerStyle={{marginTop: moderateScaleVertical(20)}}
        />
        <EarnPoints points={points} />

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={COLOR.white} />
          </View>
        ) : (
          <>
            <ImageDisplay />
            <Text style={styles.taptochoose}>Tap to choose</Text>
            <OptionsDisplay />
          </>
        )}
      </ScrollView>
      <View style={styles.bottomBtnContainer}>
        <Buttons
          onPress={() => {
            dispatch(decreasePoints(5)), HapticFeedback.trigger('rigid');
          }}
          title={'Skip'}
          bgColor={COLOR.yellow}
        />
        <Buttons
          onLongPress={() => {
            dispatch(resetPoints()), HapticFeedback.trigger('impactHeavy');
          }}
          title={'Long Press to Reset'}
          bgColor={COLOR.blackOpacity60}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLOR.blackOpacity70,
    paddingHorizontal: moderateScale(10),
    position: 'relative',
  },
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  taptochoose: {
    textAlign: 'center',
    fontFamily: FONT.Poppins400,
    fontSize: 14,
    marginVertical: moderateScaleVertical(20),
  },
  bottomBtnContainer: {
    position: 'absolute',
    bottom: moderateScaleVertical(16),
    left: moderateScale(10),
    right: moderateScale(10),
    rowGap: moderateScaleVertical(16),
  },
});
