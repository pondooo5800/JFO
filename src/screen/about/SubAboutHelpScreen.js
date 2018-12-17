//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {Fonts} from "../../utils/Fonts";

// create a component
class SubAboutBackground extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, paddingVertical: 25, paddingHorizontal: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{
                            width: 38,
                            height: 38,
                            borderRadius: 100 / 2,
                            backgroundColor: '#C6D4D7',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                            <UserAvatar size={35} name="1" color='#95B2B9' />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 5}}>
                            <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                กรณีช่วยเหลือในการดำเนินคดี
                            </Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 10, paddingTop: 5}}>
                        <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            เราเป็นเพียงผู้ถูกกล่าวหา ซึ่งตามกฎหมายถือว่าเป็นคนที่ยังไม่มีความผิด จนกระทั่งพิสูจน์และศาลตัดสินลงโทษแล้ว ซึ่งกองทุนยุติธรรมจะให้ความช่วยเหลือค่าใช้จ่ายทนายความและค่าใช้จ่ายประกันตัว
                            </Text>
                    </View>
                    <View style={{paddingVertical: 10, alignItems: 'center'}}>
                        <Image
                            source={require('../../../assets/Image/05.jpg')}
                            resizeMode='stretch'
                            style={{
                                borderWidth: 2,
                                borderRadius: 10,
                                overflow: 'hidden',
                                height: 190,
                                width: '100%',
                            }}
                        />
                        <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{paddingRight: 5, color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                                ตัวอย่าง :
                            </Text>
                            <Text style={{color: '#EEA8A3', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                                ผู้ที่เคยได้รับความช่วยเหลือจากกองทุนยุติธรรม
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default class SubAboutFoundScreen extends Component {
    render() {
        return (
            <SubAboutBackground navigation={this.props.navigation} />
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
