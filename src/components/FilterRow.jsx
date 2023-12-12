import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../utils/theme';

export default function FilterRow({productCount = 0}) {
  return (
    <View style={styles.container}>
      <View style={{...styles.headerContainer, flex: 0.7}}>
        <Text style={{color: COLORS.lightgrey, fontSize: 12}}>
          {productCount}/{productCount}
        </Text>
        <Text style={{color: COLORS.lightgrey, fontSize: 12}}>Products</Text>
      </View>
      <View
        style={{
          ...styles.headerContainer,
          flex: 0.3,
          justifyContent: 'space-between',
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 6}}>
          <Octicons
            name="sort-asc"
            size={14}
            color={COLORS.grey}
            onPress={() => console.log('Sort clicked')}
          />
          <Text style={{color: COLORS.grey, fontSize: 12}}>Sort</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 6}}>
          <Octicons
            name="arrow-switch"
            size={14}
            color={COLORS.grey}
            onPress={() => console.log('Filter clicked')}
          />
          <Text style={{color: COLORS.grey, fontSize: 12}}>Filter</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
