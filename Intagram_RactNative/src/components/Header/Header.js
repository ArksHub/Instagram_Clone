import {View, Text} from 'react-native';
import React from 'react';
import TheText from '../TextComponent/TextComponenet';
import {Feather} from '../../../Utils/Exports';
import Theme from '../../../Utils/Theme';
import {Fontisto} from '../../../Utils/Exports';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Header({HeadHeight, HeadWidth}) {
  return (
    <View style={{height: HeadHeight, width: HeadWidth, flexDirection: 'row'}}>
      <View>
        <TheText
          txt={'Instagram'}
          ff={'Fontspring-DEMO-blue_vinyl_bold_ps_ot'}
          fs={28}
          fc={Theme.white}
        />
      </View>
      <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
        <View style={{width: Theme.wp(10)}}>
          <TouchableOpacity>
            <Fontisto name="messenger" size={21} color={Theme.white} />
          </TouchableOpacity>
        </View>
        <View style={{width: Theme.wp(10)}}>
          <TouchableOpacity>
            <Feather name="heart" size={21} color={Theme.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
