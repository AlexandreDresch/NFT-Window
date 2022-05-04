import React from 'react';

import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';

import { SHADOWS, SIZES } from '../../../constants';
import { RectButton } from '../../components/Buttons';
import { FocusedStatusBar } from '../../components/FocusedStatusBar';
import { DetailsDesc } from '../../components/DetailsDesc';
import { DetailsBid } from '../../components/DetailsBid';
import { DetailsHeader } from '../../components/DetailsHeader';
import { SubInfo } from '../../components/SubInfo';

import { styles } from './styles';

export function Details({ route, navigation}){
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
        <FocusedStatusBar 
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent={true}
        />
        <View style={styles.buttonContainer}>
          <RectButton 
            minWidth={170}
            fontSize={SIZES.large}
            {...SHADOWS.dark}
          />
        </View>
        <FlatList 
          data={data.bids}
          renderItem={ ({item}) => <DetailsBid bid={item}/> }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={ {
            paddingBottom: SIZES.extraLarge * 3
          } }
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation}/>
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data} />
                {data.bids.length > 0 && (
                  <Text style={styles.currentBid}>
                    Current Bids
                  </Text>
                )}
              </View>
            </React.Fragment>
          )}
        />
    </SafeAreaView>
  );
}