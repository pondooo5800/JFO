import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation';

import {
  Icon
} from 'native-base';

import {Fonts} from '../../utils/Fonts';

//Srceen
import ComplainScreen from './ComplainScreen'

const IndexComplainScreen = StackNavigator({
  ComplainScreen: {
    screen: ComplainScreen,
    navigationOptions: ({ navigation }) => ({
      title: "ร้องเรียน",
      headerStyle: {
        backgroundColor: "#fff",
        height: 50,
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "200",
        fontSize: 20,
        fontFamily: Fonts.SukhumvitSetSemiBold,
        color: "#000",
        textAlign: "center",
        flex: 1,
        marginTop: 5
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{ margin: 15,}}>
            <Icon type="Entypo" name="menu" size={24} color="#000000" />
          </View>
        </TouchableOpacity>
      ),
      headerRight: (
          <View style={{ margin: 15,}}>
          </View>
      ),
    })
  },
});

export default SwitchNavigator({
  IndexComplainScreen: IndexComplainScreen,
});