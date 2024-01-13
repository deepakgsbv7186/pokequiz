import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/colors';
import {moderateScale, textScale} from '../theme/responsive';
import {FONT} from '../assets/fonts';

export default function Buttons({
  title,
  bgColor = COLOR.black,
  textColor = COLOR.white,
  btnContainerStyle,
  titleStyle,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        ...btnContainerStyle,
      }}>
      <Text style={{...styles.textStyle, color: textColor, ...titleStyle}}>
        {title}
      </Text>
    </TouchableOpacity>
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
    fontSize: textScale(16),
  },
});
