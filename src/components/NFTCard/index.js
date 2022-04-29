import React from 'react';

import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CircleButton } from '../Buttons';

import { COLORS, SIZES, SHADOWS, assets } from '../../../constants';
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
      <Text>
        TEST
      </Text>
    </View>
  );
}