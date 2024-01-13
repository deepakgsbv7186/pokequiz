import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import UsageStats from 'react-native-usage-stats';
import {COLORS} from '../../utils/theme';

export default function ScreenTest(props) {
  const [appUsage, setAppUsage] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const status = await UsageStats.checkPermission();
      if (!status) {
        UsageStats.openUsageAccessSettings('com.pokequiz');
      } else {
        const appTime = await UsageStats.getAppUsageInfo();
        if (appTime.length > 0) {
          setAppUsage(appTime.sort((a, b) => b.usageTime - a.usageTime));
        }
      }
    } catch (error) {
      console.error('Error fetching usage data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [appUsage]);

  const convertMillisecondsToTime = milliseconds => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return {
      hours: hours,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(69,89,164,.5)', padding: 10}}>
      <Text
        style={{
          color: COLORS.white,
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 20,
        }}>
        You Spent ₹TIME
      </Text>
      {loading ? (
        <ActivityIndicator
          animating={true}
          size={'large'}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <FlatList
          data={appUsage || []}
          key={item => item?.packageName}
          renderItem={({item}) => (
            <View style={{paddingVertical: 4}}>
              <Text>{item?.packageName}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 2,
                }}>
                <Text style={{color: COLORS.white, fontSize: 16}}>
                  {convertMillisecondsToTime(item?.usageTime).hours} hrs{' '}
                </Text>
                <Text style={{color: COLORS.white, fontSize: 16}}>
                  {convertMillisecondsToTime(item?.usageTime).minutes} mins
                </Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={
            <View
              style={{borderBottomColor: COLORS.white, borderBottomWidth: 0.4}}
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
