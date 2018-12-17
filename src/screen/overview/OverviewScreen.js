//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Fonts} from "../../utils/Fonts";

// create a component
class OverviewBackground extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor:'#fff'}}>
                <View style={{flex: 2}} >
                    <Image
                        source={require('../../../assets/Image/06.jpg')}
                        resizeMode='stretch'
                        style={{
                            height: 200,
                            width: '100%'
                        }}
                    >
                    </Image>
                </View>
                <View style={{flex: 3 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OverviewHelpScreen')}>
                        <View style={{paddingHorizontal: 25, paddingVertical:15}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                รายงานคำขอรับความช่วยเหลือ
                            </Text>
                            <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                จำแนกตามประเภทกรณีคำขอ
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OverviewAreaScreen')}>
                        <View style={{paddingHorizontal: 25, paddingVertical:15}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                รายงานคำขอรับความช่วยเหลือ
                            </Text>
                            <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                จำแนกรายพื้นที่
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OverviewAgeScreen')}>
                        <View style={{paddingHorizontal: 25, paddingVertical:15}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                รายงานผู้ยื่นคำขอ
                            </Text>
                            <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                จำแนกตามช่วงอายุ
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OverviewAppScreen')}>
                        <View style={{paddingHorizontal: 25, paddingVertical:15}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                รายงานสถิติการใช้งานระบบ
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}} />
            </View>
        );
    }
}

export default class OverviewScreen extends Component {
    render() {
        return (
            <OverviewBackground navigation={this.props.navigation} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
