import React from 'react';

import { View, Image, StatusBar } from 'react-native';

import { assets } from '../../../constants';
import { CircleButton } from '../../components/Buttons';

import { styles } from './styles';

export function DetailsHeader({data, navigation}){
    return ( 
        <View style={styles.container}>
          <Image 
            source={data.image}
            resizeMode='cover'
            style={styles.image}
          />
      
          <CircleButton 
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
          />
      
          <CircleButton 
            imgUrl={assets.heart}
            handlePress={() => navigation.goBack()}
            right={15}
            top={StatusBar.currentHeight + 10}
          />
        </View>
    )
}