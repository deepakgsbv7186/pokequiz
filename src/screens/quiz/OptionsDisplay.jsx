import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, moderateScaleVertical} from '../../theme/responsive';
import Buttons from '../../components/Buttons';
import {COLOR} from '../../theme/colors';

export default function OptionsDisplay() {
  return (
    <View style={{rowGap: moderateScaleVertical(20)}}>
      <View style={styles.container}>
        <Buttons
          title={'Hello'}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
        />
        <Buttons
          title={'Game'}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
        />
      </View>
      <View style={styles.container}>
        <Buttons
          title={'Hello'}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
        />
        <Buttons
          title={'Game'}
          bgColor={COLOR.bulelabeltext}
          btnContainerStyle={{flex: 1}}
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
