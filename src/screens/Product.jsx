import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {COLORS} from '../utils/theme';

export default function Product() {
  const route = useRoute();
  const {productDetail} = route.params;
  return (
    <>
      <Header productName={productDetail?.category[0]?.name} />
      <Image
        source={{uri: productDetail?.mediaUrl}}
        style={{resizeMode: 'cover', width: '100%', height: '40%'}}
      />
      <View style={{flex: 1, paddingHorizontal: 10, marginTop: 10}}>
        <Text style={{color: COLORS.black, fontSize: 18, fontWeight: '600'}}>
          {productDetail?.name}
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 14, fontWeight: '500'}}>
          {productDetail?.variants[0]?.variant}
        </Text>
        <Text style={{color: COLORS.black, fontSize: 18, fontWeight: '600'}}>
          ₹{productDetail?.variants[0]?.sellingPrice}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
