import React from 'react';

import { View, Text, Image, TextInput } from 'react-native';



import { styles } from './styles';
import { COLORS, FONTS, SIZES, assets } from '../../../constants';

export function HomeHeader(){
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
    </View>
  );
}