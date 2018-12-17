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
                    <View style={{paddingHorizontal: 10, paddingTop: 5}}>
                        <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                            ติดต่อกองทุนยุติธรรม
                        </Text>
                    </View>
                    <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                        <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            สำนักงานกองทุนยุติธรรม กรุงเทพมหานคร
                        </Text>
                        <Text style={{paddingLeft:15,color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            99/42 หมู่ 4 ชั้น 22 อาคารซอฟต์แวร์ปาร์ค ถนนแจ้งวัฒนะ ต.คลองเกลือ อ.ปากเกร็ด จ.นนทบุรี 11120
                        </Text>
                        <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            กลุ่มงานบริหารทั่วไป
                        </Text>
                        <Text style={{paddingLeft:15,color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            0-2502-6760, 0-2502-67420-2502-6743, 0-2502-6156
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default class SubAboutContactScreen extends Component {
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
