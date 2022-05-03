import React from 'react';

import { View, Text, Image, TextInput } from 'react-native';

import { styles } from './styles';
import { assets } from '../../../constants';

export function HomeHeader({ onSearch }){
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={styles.image}
        />
        <View style={styles.profileContainer}>
          <Image 
            source={assets.person01}
            resizeMode='contain'
            style={styles.profileImage}
          />
          <Image 
            source={assets.badge}
            resizeMode='contain'
            style={styles.badgeImage}
          />
        </View>
      </View>
      <View style={styles.greatingContainer}>
        <Text
          style={styles.greatingText}
        >
          Hello, User 👋
        </Text>
        <Text
          style={styles.messageText}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <Image 
            source={assets.search}
            resizeMode= 'contain'
            style={styles.searchImage}
          />
          <TextInput 
            placeholder='Search NFTs'
            style={styles.searchInput}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
}