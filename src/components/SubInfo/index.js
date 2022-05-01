import React from 'react';

import { View, Text, Image } from 'react-native';
import { assets, COLORS, FONTS, SIZES } from '../../../constants';

import { styles } from './styles';

export function NFTTitle({title, subTitle, titleSize, subTitleSize}){
  return (
    <View>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>
            {title}
        </Text>

        <Text style={{ fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary }}>
            {subTitle}
        </Text>
    </View>
  );
}

export function EthPrice({price}){
    return (
      <View style={styles.ethPriceContainer}>
          <Image 
            source={assets.eth}
            resizeMode='contain'
            style={styles.ethPriceImage}
          />
          <Text style={styles.ethPriceText}>
            {price}
          </Text>
      </View>
    );
}

export function ImageCmp({imgUrl, index}){
    return (
      <Image 
        source={imgUrl}
        resizeMode='contain'
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    );
}

export function People(){
    return (
      <View style={styles.peopleContainer}>
          {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
          ))}
      </View>
    );
}

export function EndDate(){
    return (
      <View style={styles.endDateContainer}>
          <Text style={styles.endDateText1}>
            Ending in
          </Text>
          <Text style={styles.endDateText2}>
            12h 30m
          </Text>
      </View>
    );
}

export function SubInfo(){
    return (
      <View style={styles.subInfoContainer}>
          <People />
          <EndDate />
      </View>
    );
}
