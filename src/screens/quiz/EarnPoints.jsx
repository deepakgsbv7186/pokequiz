import {Text, View} from 'react-native';
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
        backgroundColor:
          points === 0
            ? COLOR.blackOpacity60
            : points < 0
            ? COLOR.red
            : COLOR.green,
        marginVertical: moderateScaleVertical(16),
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
        {points === 0 ? 'Play to earn points' : `${points} points`}
      </Text>
    </View>
  );
}
