import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../utils/theme';

export default function ProductCard({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailProduct', {productDetail: item})
      }
      activeOpacity={0.5}
      style={styles.productCard}>
      <ImageBackground
        source={{uri: item?.mediaUrl}}
        style={styles.productImage}>
        <AntDesign
          name="hearto"
          size={20}
          color={COLORS.black}
          onPress={() => console.log('Like clicked')}
          style={{padding: 10}}
        />
      </ImageBackground>
      <Text style={styles.productName}>{item?.name}</Text>
      <Text style={styles.productVariant}>{item?.variants[0]?.variant}</Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.productPrice}>
          ₹{item?.variants[0]?.sellingPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginHorizontal: 2,
    marginVertical: 6,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 4,
    alignItems: 'flex-end',
  },
  productName: {
    color: COLORS.black,
    fontSize: 16,
    marginTop: 8,
  },
  productVariant: {
    color: COLORS.grey,
    fontSize: 14,
  },
  productPrice: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  separator: {
    height: 16,
  },
});
