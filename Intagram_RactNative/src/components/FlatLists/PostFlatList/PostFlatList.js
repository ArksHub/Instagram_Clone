import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {FlatList, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Theme from '../../../../Utils/Theme';
import {IMAGES} from '../../../assets/IMAGES/Index';
import TheText from '../../TextComponent/TextComponenet';
import {
  Entypo,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from '../../../../Utils/Exports';

const PostsList = [
  {
    id: 2,
    Name: 'John',
    Image: IMAGES.image2,
    loc: 'The Hexa Town',
  },
  {
    id: 3,
    Name: 'kate',
    Image: IMAGES.image3,
    loc: 'Kodex Texh',
  },
  {
    id: 4,
    Name: 'Willaim',
    Image: IMAGES.image1,
    loc: 'Kariger',
  },
  {
    id: 5,
    Name: 'Willaim',
    Image: IMAGES.image4,
    loc: 'Medgoo',
  },
  {
    id: 6,
    Name: 'Willaim',
    Image: IMAGES.image2,
    loc: 'Devsink',
  },
];

function PostFlatList({navigation, refreshControl, getLeaderBoard}) {
  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={PostsList}
        keyExtractor={list => list.id}
        renderItem={({item, index}) => (
          <Card Img={item?.Image} name={item.Name} status={item.loc} />
        )}
      />
    </View>
  );
}
export default PostFlatList;

function Card({Img, name, status}) {
  return (
    <View
      style={{
        width: Theme.wp(95),
        alignItems: 'center',
        marginVertical: 5,
        height: Theme.hp(55),
      }}>
      <View
        style={{
          height: Theme.hp(7),
          backgroundColor: 'black',
          width: Theme.wp(95),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Image
            source={Img}
            style={{
              height: Theme.hp(5),
              width: Theme.wp(11),
              borderRadius: 40,
              resizeMode: 'contain',
              marginRight: Theme.wp(1.5),
            }}
          />
          <View>
            <TheText txt={name} fc={Theme.white} fw={'bold'} />
            <TheText txt={status} fc={Theme.white} fs={12} />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color={Theme.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        source={Img}
        style={{
          height: Theme.hp(42),
          width: Theme.wp(95),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: Theme.wp(100),
          paddingHorizontal: Theme.wp(3),
          marginTop: Theme.hp(1),
        }}>
        <View style={{width: Theme.wp(8)}}>
          <TouchableOpacity>
            <Feather name="heart" size={24} color={Theme.white} />
          </TouchableOpacity>
        </View>
        <View style={{width: Theme.wp(12), alignItems: 'center'}}>
          <TouchableOpacity>
            <Feather name="message-circle" size={24} color={Theme.white} />
          </TouchableOpacity>
        </View>
        <View style={{width: Theme.wp(8), alignItems: 'center'}}>
          <TouchableOpacity>
            <Feather name="send" size={26} color={Theme.white} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Feather name="bookmark" size={26} color={Theme.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
