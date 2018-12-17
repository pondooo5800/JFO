//import liraries
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Fonts} from '../../utils/Fonts';
// create a component
class ChatBackground extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor:'#fff'}}>
                <View style={{flex: 0.5}} >
                    <View style={{ flexDirection:'row',paddingHorizontal:20,paddingVertical:15 }}>
                        <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                            กลุ่มสนทนา :
                        </Text>
                        <Text style={{paddingLeft:10,color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                            สำนักงานกองทุนยุติธรรม
                        </Text>
                    </View>
                </View>

                <View style={{flex: 3,}}>
                    <Image
                        source={require('../../../assets/Image/Chat.png')}
                        resizeMode='stretch'
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                    >
                    </Image>
                </View>
                <View style={{flex: 0.5}}>
                        <View style={{flex: 1, flexDirection: 'row',paddingHorizontal: 10,paddingVertical:15}}>
                            <View style={{flex: 3, alignItems: 'flex-start'}}>
                                <TextInput
                                    style={{
                                        height: 50,
                                        width: "100%",
                                        borderColor: '#FFF',
                                        backgroundColor: '#F5F5F5',
                                        borderWidth: 2,
                                        borderRadius: 10,
                                        paddingLeft: 15,
                                        paddingRight: 15,
                                        fontFamily: Fonts.SukhumvitSetText,
                                        fontSize: 16,
                                        color: '#FA527D',
                                        textAlign: 'left',
                                    }}
                                    selectionColor={'#FA527D'}
                                    placeholder="พิมพ์ข้อความ"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={{flex: 1.5, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={{
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: {height: 1, width: 1}, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1, //IOS
                                    backgroundColor: '#FA527D',
                                    borderRadius: 15,
                                    elevation: 5, // Android
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '70%',
                                    height: 45,
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontFamily: Fonts.SukhumvitSetMedium,
                                        fontSize: 18
                                    }}>
                                        ส่ง
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                </View>
            </View>
        );
    }
}

export default class ChatScreen extends Component {
    render() {
        return (
            <ChatBackground navigation={this.props.navigation} />
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
