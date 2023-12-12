import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchProducts} from '../api/ProductService';
import {COLORS} from '../utils/theme';
import Header from '../components/Header';
import FilterRow from '../components/FilterRow';
import ProductCard from '../components/ProductCard';

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetchProducts();
    if (response?.status === true) {
      setProducts(response?.object);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header productName={products[0]?.category[0]?.name} />
        <FilterRow productCount={products?.length} />
        <FlatList
          data={products || []}
          key={({item}) => item?.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => (
            <ProductCard item={item} navigation={props.navigation} />
          )}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
});
