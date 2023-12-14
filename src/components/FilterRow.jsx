import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../utils/theme';

export default function FilterRow({
  productCount = 0,
  sortDesc = false,
  setSortDesc,
}) {
  return (
    <View style={styles.container}>
      <View style={{...styles.headerContainer, flex: 0.6}}>
        <Text style={styles.text}>
          {productCount}/{productCount} Products
        </Text>
      </View>
      <View
        style={{
          ...styles.headerContainer,
          flex: 0.4,
          justifyContent: 'space-between',
        }}>
        <View style={styles.iconTextContainer}>
          <Octicons
            name={sortDesc ? 'sort-desc' : 'sort-asc'}
            size={14}
            color={COLORS.grey}
            onPress={() => setSortDesc(prev => !prev)}
            accessible={true}
            accessibilityLabel={`Toggle Sorting (${
              sortDesc ? 'High to Low' : 'Low to High'
            })`}
          />
          <Text style={styles.text}>
            {sortDesc ? 'High to Low' : 'Low to High'}
          </Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Octicons
            name="arrow-switch"
            size={14}
            color={COLORS.grey}
            onPress={() => console.log('Filter clicked')}
            accessible={true}
            accessibilityLabel="Filter"
          />
          <Text style={styles.text}>Filter</Text>
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
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  text: {
    color: COLORS.grey,
    fontSize: 12,
  },
});
