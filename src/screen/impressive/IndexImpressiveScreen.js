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
import Test from './ImpressiveScreen'

const IndexTestScreen = StackNavigator({
  Test: {
    screen: Test,
    navigationOptions: ({ navigation }) => ({
      title: "เรื่องราวประทับใจ",
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
        <TouchableOpacity>
          <View style={{ margin: 15,}}>
            <Icon name="share" size={24} color="#000000" />
          </View>
        </TouchableOpacity>
      ),
    })
  },
});

export default SwitchNavigator({
  IndexTestScreen: IndexTestScreen,
});