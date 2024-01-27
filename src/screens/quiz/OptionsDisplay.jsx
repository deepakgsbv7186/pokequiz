import {StyleSheet, View} from 'react-native';
import React from 'react';
import {moderateScale, moderateScaleVertical} from '../../theme/responsive';
import Buttons from '../../components/Buttons';
import {COLOR} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {decreasePoints, increasePoints} from '../../redux/pokemon/pokemonSlice';

export default function OptionsDisplay() {
  const {options, currentPokemon} = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  const handleChoose = choosed => {
    if (choosed.toLowerCase() === currentPokemon?.name.toLowerCase()) {
      dispatch(increasePoints(10));
    } else {
      dispatch(decreasePoints(10));
    }
  };
  return (
    <View style={{rowGap: moderateScaleVertical(20)}}>
      <View style={styles.container}>
        <Buttons
          title={options[0]}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
          onPress={() => handleChoose(options[0])}
        />
        <Buttons
          title={options[1]}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
          onPress={() => handleChoose(options[1])}
        />
      </View>
      <View style={styles.container}>
        <Buttons
          title={options[2]}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
          onPress={() => handleChoose(options[2])}
        />
        <Buttons
          title={options[3]}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
          onPress={() => handleChoose(options[3])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: moderateScale(16),
  },
});
