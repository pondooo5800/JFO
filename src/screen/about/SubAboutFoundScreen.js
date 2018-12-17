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
                            พระราชบัญญัติกองทุนยุติธรรม พ.ศ. 2558
                        </Text>
                    </View>
                    <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                        <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            มาตรา 5 : ให้จัดตั้งกองทุนขึ้นกองทุนหนึ่งในสำนักงานปลัดกระทรวงยุติธรรม เรียกว่า “กองทุนยุติธรรม” มีฐานะเป็นนิติบุคคล มีวัตถุประสงค์เพื่อเป็นแหล่งเงินทุนสำหรับใช้จ่ายเกี่ยวกับการช่วยเหลือประชาชนในการดำเนินคดี การขอปล่อยชั่วคราวผู้ต้องหาหรือจำเลย การถูกละเมิดสิทธิมนุษยชนและการให้ความรู้ทางกฎหมายแก่ประชาชน
                        </Text>
                        <Text style={{paddingTop:10,color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 15}}>
                            มาตรา 9  : เงินกองทุนให้ใช้จ่ายเพื่อกิจการ ดังต่อไปนี้
                                    (1) การช่วยเหลือประชาชนในการดำเนินคดี
                                    (2) การขอปล่อยชั่วคราวผู้ต้องหาหรือจำเลย
                                    (3) การช่วยเหลือผู้ถูกละเมิดสิทธิมนุษยชนหรือผู้ได้รับผลกระทบจากการถูกละเมิดสิทธิมนุษยชน
                                    (4) การให้ความรู้ทางกฎหมายแก่ประชาชน
                                    (5) การดำเนินงานกองทุนหรือการบริหารกองทุน และกิจการอื่นที่เกี่ยวกับหรือเกี่ยวเนื่องกับการจัดกิจการของกองทุน
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default class SubAboutHelpScreen extends Component {
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
