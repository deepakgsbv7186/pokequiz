import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchProducts} from '../api/ProductService';
import {COLORS} from '../utils/theme';
import Header from '../components/Header';
import FilterRow from '../components/FilterRow';
import ProductCard from '../components/ProductCard';

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [sortDesc, setSortDesc] = useState(false);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetchProducts();
      if (response?.status === true) {
        const sortedProducts = response?.object?.sort((a, b) =>
          sortDesc
            ? b?.variants[0]?.sellingPrice - a?.variants[0]?.sellingPrice
            : a?.variants[0]?.sellingPrice - b?.variants[0]?.sellingPrice,
        );
        setProducts(sortedProducts);
      }
    } catch (error) {
      setLoading(false);
      console.log('fetchProducts:productlist.jsx', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [sortDesc]);
  return (
    <>
      <View style={styles.container}>
        <Header productName={products[0]?.category[0]?.name} />
        <FilterRow
          productCount={products?.length}
          sortDesc={sortDesc}
          setSortDesc={setSortDesc}
        />
        {loading ? (
          <ActivityIndicator
            animating={true}
            size={'large'}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          />
        ) : (
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
        )}
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
