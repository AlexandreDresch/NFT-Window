import React from 'react';

import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';

import { assets, SHADOWS, SIZES } from '../../../constants';
import { CircleButton, RectButton } from '../../components/Buttons';
import { FocusedStatusBar } from '../../components/FocusedStatusBar';
import { DetailsDesc } from '../../components/DetailsDesc';
import { DetailsBid } from '../../components/DetailsBid';

import { styles } from './styles';

const DetailsHeader = ({data, navigation}) => {
  <View style={styles.detailsHeaderContainer}>
    <Image 
      source={data.image}
      resizeMode='cover'
      style={styles.detailsHeaderImage}
    />
  </View>
}

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
          ListHeaderComponent={() => {
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation}/>
            </React.Fragment>
          }}
        />
    </SafeAreaView>
  );
}