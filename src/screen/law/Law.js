//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {Fonts} from "../../utils/Fonts";

// create a component
class LawBackground extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={{flex: 2,}} >
                    <View style={{flexDirection: 'row',paddingHorizontal:20,paddingTop: 25,}}>
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
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                พระราชบัญญัติกองทุนยุติธรรม
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',paddingHorizontal:20,paddingTop: 10,}}>
                        <View style={{
                            width: 38,
                            height: 38,
                            borderRadius: 100 / 2,
                            backgroundColor: '#C6D4D7',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                            <UserAvatar size={35} name="2" color='#95B2B9' />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 5}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                ระเบียบคณะกรรมการกองทุนยุติธรรม
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',paddingHorizontal:20,paddingTop: 10,}}>
                        <View style={{
                            width: 38,
                            height: 38,
                            borderRadius: 100 / 2,
                            backgroundColor: '#C6D4D7',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                            <UserAvatar size={35} name="3" color='#95B2B9' />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 5}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                พระราชบัญญัติการบริหารทุนหมุนเวียน
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',paddingHorizontal:20,paddingTop: 10,}}>
                        <View style={{
                            width: 38,
                            height: 38,
                            borderRadius: 100 / 2,
                            backgroundColor: '#C6D4D7',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                            <UserAvatar size={35} name="4" color='#95B2B9' />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 5}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                พระราชบัญญัติธุรกรรมอิเล็กทรอนิกส์
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 2,}} />
            </View>
        );
    }
}

export default class OverviewScreen extends Component {
    render() {
        return (
            <LawBackground navigation={this.props.navigation} />
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
