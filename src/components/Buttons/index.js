import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../../constants';

export function CircleButton({imgUrl, handlePress, ...props}){
  return (
    <TouchableOpacity 
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image 
        source={imgUrl}
        resizeMode='contain'
        style={styles.iconImage}
      />
    </TouchableOpacity>
  );
}