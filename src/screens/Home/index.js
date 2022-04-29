import React, { useState } from 'react';

import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { NFTCard } from '../../components/NFTCard';
import { HomeHeader } from '../../components/HomeHeader';
import { FocusedStatusBar } from '../../components/FocusedStatusBar';

import { styles } from './styles';
import { COLORS, NFTData } from '../../../constants';

export function Home(){
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <FocusedStatusBar background={COLORS.primary} />

          <View style={{ flex: 1 }}>
            <View style={styles.nftList}>
              <FlatList 
                data={NFTData}
                renderItem={({item}) => <NFTCard data={item}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader />}
              />
            </View>

            <View style={styles.backgroundNftList}>
              <View style={styles.selfClose1}>

              </View>
              <View style={styles.selfClose2}>

              </View>
            </View>
          </View>
        </SafeAreaView>
    </View>
  );
}