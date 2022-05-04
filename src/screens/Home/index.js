import React, { useState } from 'react';

import { View, SafeAreaView, FlatList } from 'react-native';

import { NFTCard } from '../../components/NFTCard';
import { HomeHeader } from '../../components/HomeHeader';
import { FocusedStatusBar } from '../../components/FocusedStatusBar';

import { styles } from './styles';
import { COLORS, NFTData } from '../../../constants';

export function Home(){

  const [ nftData, setNftData ] = useState(NFTData);

  function handleSearch(value) {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => 
    item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  } 

  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <FocusedStatusBar background={COLORS.primary} />

          <View style={{ flex: 1 }}>
            <View style={styles.nftList}>
              <FlatList 
                data={nftData}
                renderItem={({item}) => <NFTCard data={item}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
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