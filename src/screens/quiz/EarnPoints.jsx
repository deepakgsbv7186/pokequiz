import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../theme/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../theme/responsive';
import {FONT} from '../../assets/fonts';

export default function EarnPoints({points}) {
  return (
    <View
      style={{
        backgroundColor: COLOR.blackOpacity10,
        marginVertical: moderateScaleVertical(20),
        padding: moderateScale(10),
        borderRadius: moderateScale(8),
      }}>
      <Text
        style={{
          fontFamily: FONT.Poppins500,
          fontSize: textScale(16),
          color: COLOR.white,
          textAlign: 'center',
        }}>
        Points earned: {points}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
