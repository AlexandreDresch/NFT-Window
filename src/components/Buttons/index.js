import React from 'react';

import { Image, TouchableOpacity, Text } from 'react-native';

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

export function RectButton({minWidth, fontSize, handlePress, ...props}) {
  return(
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: 'center',
      }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}