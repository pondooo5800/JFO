import React, {Component} from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import {Fonts} from "./src/utils/Fonts";
import LinearGradient from "react-native-linear-gradient";
import {Icon} from 'native-base';
import {Button, Text, Badge} from 'react-native-elements';
import {DrawerItems, createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation'

//screen
import IndexSceen from './src/screen/main/IndexMainScreen';
import IndexOverviewScreen from './src/screen/overview/IndexOverviewScreen';
import IndexAboutScreen from './src/screen/about/IndexAboutScreen';
import IndexLawScreen from './src/screen/law/IndexLawScreen';
import IndexComplainScreen from './src/screen/complain/IndexComplainScreen';
import IndexChatScreen from './src/screen/chat/IndexChatScreen';
import IndexImpressiveScreen from './src/screen/impressive/IndexImpressiveScreen';
import IndexServiceCenterScreen from './src/screen/servicecenter/IndexServiceCenterScreen';
import IndexWebServicesScreen from './src/screen/webservices/IndexWebServicesScreen';



const {width} = Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator navigation={this.props.navigation} />
    )
  }
}

const CustomDrawerComponent = (props) => (
  <LinearGradient
    colors={[
      "#FDC669",
      "#FCA474",
      "#FB887D",
      "#FB7B81",
      "#FA6886",
      "#FA5D89"
    ]}
    start={{y: 0.0, x: 1.0}}
    end={{y: 1.0, x: 1.0}}
    style={{flex: 1}}
  >
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 2.5}}>
        <View style={{paddingTop: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontFamily: Fonts.SukhumvitSetMedium, fontSize: 24}}>กองทุนยุติธรรม</Text>
        </View>
        <View style={{height: 120, paddingLeft: 40, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Image source={require('./assets/Image/persona.png')} style={{height: 100, width: 100, borderRadius: 60}} />
        </View>
      </View>

      <View style={{flex: 3}} >
        <View style={{paddingTop: 100, height: 120, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Button
            title='ลงทะเบียน'
            titleStyle={{
              color: '#fff', fontFamily: Fonts.SukhumvitSetMedium, fontSize: 20
            }}
            buttonStyle={{
              backgroundColor: "#FCBC96",
              width: 150,
              height: 40,
              borderColor: "transparent",
              borderWidth: 1,
            }}
          />
          <View style={{paddingTop: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#fff', fontFamily: Fonts.SukhumvitSetMedium, fontSize: 14}}>(ไม่เสียค่าใช้จ่ายใดๆ ทั้งสิ้น)</Text>
          </View>
        </View>
      </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </LinearGradient>
)

const AppDrawerNavigator = createDrawerNavigator({
  IndexSceen: {
    screen: IndexSceen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          หน้าหลัก
        </Text>
        <View style={{paddingRight: 10}}>
          <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
            <Text style={{color: '#FFF'}}>10</Text>
          </Badge>
        </View>
      </View>,
      drawerIcon: ({tintColor}) => (
        <Icon type="Entypo" name='home' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexOverviewScreen: {
    screen: IndexOverviewScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          สรุปภาพรวม
      </Text>
        <View style={{paddingRight: 10}}>
          {/* <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
            <Text style={{color: '#FFF'}}>10</Text>
          </Badge> */}
        </View>
      </View>,
      drawerIcon: ({tintColor}) => (
        <Icon type="Entypo" name='bar-graph' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexAboutScreen: {
    screen: IndexAboutScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          เกี่ยวกับเรา
    </Text>
        <View style={{paddingRight: 10}}>
          {/* <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
          <Text style={{color: '#FFF'}}>10</Text>
        </Badge> */}
        </View>
      </View>,
      drawerIcon: ({tintColor}) => (
        <Icon type="FontAwesome" name='users' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexLawScreen: {
    screen: IndexLawScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          กฎหมาย
      </Text>
        <View style={{paddingRight: 10}}>
          <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
            <Text style={{color: '#FFF'}}>120</Text>
          </Badge>
        </View>
      </View>, drawerIcon: ({tintColor}) => (
        <Icon type="FontAwesome" name='legal' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexComplainScreen: {
    screen: IndexComplainScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          ร้องเรียน
    </Text>
        <View style={{paddingRight: 10}}>
          {/* <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
          <Text style={{color: '#FFF'}}>10</Text>
        </Badge> */}
        </View>
      </View>,
      drawerIcon: ({tintColor}) => (
        <Icon type="MaterialCommunityIcons" name='message-text' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexChatScreen: {
    screen: IndexChatScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          สนทนา
      </Text>
        <View style={{paddingRight: 10}}>
          {/* <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
            <Text style={{color: '#FFF'}}>10</Text>
          </Badge> */}
        </View>
      </View>, drawerIcon: ({tintColor}) => (
        <Icon type="Entypo" name='chat' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexImpressiveScreen: {
    screen: IndexImpressiveScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          เรื่องราวประทับใจ
    </Text>
        <View style={{paddingRight: 10}}>
          <Badge containerStyle={{backgroundColor: '#FFA4AC', borderWidth: 2, borderColor: '#FFF'}}>
          <Text style={{color: '#FFF'}}>75</Text>
        </Badge>
        </View>
      </View>,
      drawerIcon: ({tintColor}) => (
        <Icon type="FontAwesome" name='heart' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexServiceCenterScreen: {
    screen: IndexServiceCenterScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          ศูนย์บริการ
    </Text>
        <View style={{paddingRight: 10}}>
          <Badge containerStyle={{backgroundColor: '#FFA4AC', borderWidth: 2, borderColor: '#FFF'}}>
          <Text style={{color: '#FFF'}}>48</Text>
        </Badge>
        </View>
      </View>,
      drawerIcon: ({tintColor}) => (
        <Icon type="MaterialIcons" name='account-balance' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
  IndexWebServicesScreen: {
    screen: IndexWebServicesScreen,
    navigationOptions: ({navigation}) => ({
      drawerLabel: <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text h5 style={{fontFamily: Fonts.SukhumvitSetMedium, fontWeight: '200', fontSize: 18, margin: 16, color: '#FFF'}}>
          บริการข้อมูล
      </Text>
        <View style={{paddingRight: 10}}>
          {/* <Badge containerStyle={{backgroundColor: 'red', borderWidth: 2, borderColor: '#FFF'}}>
            <Text style={{color: '#FFF'}}>10</Text>
          </Badge> */}
        </View>
      </View>, drawerIcon: ({tintColor}) => (
        <Icon type="Entypo" name='cloud' style={{fontSize: 24, color: tintColor}} />
      )
    })
  },
},
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width,
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
    }
  }
  );
