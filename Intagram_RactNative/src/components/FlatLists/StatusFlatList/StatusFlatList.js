import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {FlatList, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Theme from '../../../../Utils/Theme';
import {IMAGES} from '../../../assets/IMAGES/Index';
import TheText from '../../TextComponent/TextComponenet';
import LinearGradient from 'react-native-linear-gradient';

const StatusList = [
  {
    id: 1,
    Name: 'Your Status',
    Image: IMAGES.image1,
  },
  {
    id: 2,
    Name: 'Jihn',
    Image: IMAGES.image2,
  },
  {
    id: 3,
    Name: 'kate',
    Image: IMAGES.image3,
  },
  {
    id: 4,
    Name: 'Willaim',
    Image: IMAGES.image4,
  },
  {
    id: 5,
    Name: 'Willaim',
    Image: IMAGES.image4,
  },
  {
    id: 6,
    Name: 'Willaim',
    Image: IMAGES.image4,
  },
];

function StatusFlatList({navigation, refreshControl, getLeaderBoard}) {
  return (
    <View style={styles.screen}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // refreshControl={refreshControl}
        data={StatusList}
        keyExtractor={list => list.id}
        renderItem={({item, index}) => (
          <Card Img={item?.Image} name={item.Name} />
        )}
      />
    </View>
  );
}
export default StatusFlatList;

function Card({Img, name}) {
  return (
    <View
      style={{
        width: Theme.wp(20),
        alignItems: 'center',
        margin: 5,
        borderRadius: 40,
      }}>
      <View
        style={{
          height: Theme.hp(13),
          width: Theme.wp(22),
          alignItems: 'center',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            '#FFA500',
            '#FFA500',
            '#FFA500',
            '#6A0DAD',
            '#FF1493',
            '#FF1493',
          ]}
          style={{
            height: Theme.hp(10),
            width: Theme.wp(21.5),
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={Img}
            style={{
              height: Theme.hp(9),
              width: Theme.wp(20),
              borderRadius: 40,
              // resizeMode: 'contain',
            }}
          />
        </LinearGradient>
        <TheText txt={name} fc={Theme.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: Theme.hp(10),
    width: Theme.wp(90),
    backgroundColor: Theme.white,
    marginBottom: Theme.hp(1),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  screen: {
    height: Theme.hp(15),
    width: Theme.wp(95),
  },
});
