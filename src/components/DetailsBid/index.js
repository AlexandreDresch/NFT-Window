import React from 'react';

import { View, Text, Image } from 'react-native';

import { EthPrice } from '../SubInfo';

import { styles } from './styles';

export function DetailsBid({bid}){
  return (
    <View style={styles.container}>
      <Image 
        source={bid.image}
        resizeMode='contain'
        style={styles.bidImage}
      />

      <View>
        <Text style={styles.bidText}>
          Bid placed by {bid.name}
        </Text>

        <Text style={styles.bidDateText}>
          {bid.date}
        </Text>
      </View>

      <EthPrice 
        price={bid.price}
      />
    </View>
  );
}