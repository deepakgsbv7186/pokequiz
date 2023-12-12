import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';

export default function Header({productName = 'Products'}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{...styles.headerContainer, flex: 0.66}}>
        <AntDesign
          name="arrowleft"
          size={20}
          color={COLORS.black}
          onPress={() => navigation.navigate('ProductList')}
        />
        <Text style={{color: COLORS.black, fontSize: 14, fontWeight: '500'}}>
          {productName}
        </Text>
      </View>
      <View
        style={{
          ...styles.headerContainer,
          flex: 0.34,
          justifyContent: 'space-between',
        }}>
        <AntDesign
          name="search1"
          size={20}
          color={COLORS.black}
          onPress={() => console.log('Search clicked')}
        />
        <AntDesign
          name="hearto"
          size={20}
          color={COLORS.black}
          onPress={() => console.log('Like clicked')}
        />
        <SimpleLineIcons
          name="handbag"
          size={20}
          color={COLORS.black}
          onPress={() => console.log('Bag clicked')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    // elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
