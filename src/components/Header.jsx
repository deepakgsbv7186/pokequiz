import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/colors';
import {moderateScale, textScale} from '../theme/responsive';
import {FONT} from '../assets/fonts';

export default function Header({
  title,
  bgColor = COLOR.black,
  textColor = COLOR.white,
  headerContainerStyle,
  titleStyle,
}) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        ...headerContainerStyle,
      }}>
      <Text style={{...styles.textStyle, color: textColor, ...titleStyle}}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: FONT.Poppins600,
    fontSize: textScale(18),
  },
});
