import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {COLOR} from '../theme/colors';
import {height, width} from '../theme/responsive';
import {FONT} from '../assets/fonts';

export default function BlurTestModal({isVisible, onClose}) {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      coverScreen={false}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      backdropColor={COLOR.blackOpacity40}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.logoutText}>Welcome to PokeQuiz</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  innerContainer: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
    borderColor: COLOR.approved,
    borderWidth: 1,
  },
  logoutText: {
    fontFamily: FONT.Poppins500,
    fontSize: 14,
    color: COLOR.bulelabeltext,
    textAlign: 'center',
  },
});
