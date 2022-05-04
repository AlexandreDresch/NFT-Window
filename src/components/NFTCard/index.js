import React from 'react';

import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CircleButton, RectButton } from '../Buttons';
import { SubInfo, EthPrice, NFTTitle } from '../SubInfo';

import { SIZES, assets } from '../../../constants';
import { styles } from './styles';

export function NFTCard({data}){
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={styles.cards}>
        <Image 
          source={data.image}
          resizeMode='cover'
          style={styles.image}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
      </View>
      <SubInfo />
      <View style={styles.nftTitleContainer}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View style={styles.ethPriceContainer}>
          <EthPrice price={data.price} />
          <RectButton 
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', {data})}
          />
        </View>
      </View>
    </View>
  );
}