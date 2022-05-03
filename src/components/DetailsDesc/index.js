import React, { useState } from 'react';

import { View, Text } from 'react-native';

import { EthPrice, NFTTitle } from '../SubInfo';

import { styles } from './styles';
import { SIZES } from '../../../constants';

export function DetailsDesc({data}){
  const [text, setText ] = useState(data.description.slice(0, 100));
  const [ readMore, setReadMore ] = useState();

  return (
    <>
      <View style={styles.titleContainer}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice 
          price={data.price}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>
          Description
        </Text>

        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>
            {text}
            {!readMore && '...'}
          </Text>
          <Text 
            style={styles.readMore}
            onPress={() => {
              if(!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}
          >
            {readMore ? ' Show Less' : ' Read More'}
          </Text>          
        </View>
      </View>
    </>
  );
}