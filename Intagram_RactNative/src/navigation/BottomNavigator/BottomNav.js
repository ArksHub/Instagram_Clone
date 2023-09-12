import {
  AntDesign,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '../../../Utils/Exports';
import {Text, Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Theme from '../../../Utils/Theme';
import InstaScreen from '../../screens/InstaScreen';
import {useState} from 'react';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: Theme.hp(2),
    paddingRight: 10,
    right: 0,
    left: 0,
    elevation: 0,
    borderTopColor: Theme.grey3,
    height: Theme.hp(10),
    backgroundColor: Theme.black,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
};
export default function BottomTabNavigator() {
  const [Icon, setIcon] = useState(false);
  const [Icon1, setIcon1] = useState(false);
  const [Icon2, setIcon2] = useState(false);
  const [Icon3, setIcon3] = useState(false);
  const [Icon4, setIcon4] = useState(false);
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="InstaScreen"
        component={InstaScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather
                  name="home"
                  size={26}
                  color={focused ? Theme.white : Theme.grey1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="InstaScreenf"
        component={InstaScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Feather
                  name="search"
                  size={26}
                  color={focused ? Theme.white : Theme.grey1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="InstaScreend"
        component={InstaScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome
                  name="plus-square-o"
                  size={26}
                  color={focused ? Theme.white : Theme.grey1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="InstaScreens"
        component={InstaScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Foundation
                  name="play-video"
                  size={26}
                  color={focused ? Theme.white : Theme.grey1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="InstaScreena"
        component={InstaScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={26}
                  color={focused ? Theme.white : Theme.grey}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
