import {View, Text} from 'react-native';
import React from 'react';

export default function TheText({
  ht,
  wd,
  fs,
  ff,
  fc,
  txt,
  Lft,
  Rft,
  Tp,
  Btm,
  mb,
  mt,
  ml,
  mr,
  fw,
  tA,
  onPress,
}) {
  return (
    <View>
      <Text
        style={{
          height: ht,
          width: wd,
          fontSize: fs,
          fontFamily: ff,
          fontWeight: fw,
          color: fc,
          left: Lft,
          right: Rft,
          top: Tp,
          bottom: Btm,
          marginBottom: mb,
          marginTop: mt,
          marginLeft: ml,
          marginRight: mr,
          textAlign: tA,
        }}
        onPress={onPress}>
        {txt}
      </Text>
    </View>
  );
}
