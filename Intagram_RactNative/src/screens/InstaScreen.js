import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import Theme from '../../Utils/Theme';
import StatusFlatList from '../components/FlatLists/StatusFlatList/StatusFlatList';
import PostFlatList from '../components/FlatLists/PostFlatList/PostFlatList';

export default function InstaScreen() {
  return (
    <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <View style={{height: Theme.hp(10), justifyContent: 'center'}}>
        <Header HeadHeight={Theme.hp(6)} HeadWidth={Theme.wp(90)} />
      </View>
      <View>
        <StatusFlatList />
      </View>
      <View style={{height: Theme.hp(62)}}>
        <PostFlatList />
      </View>
    </View>
  );
}
