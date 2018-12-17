import React, {Component} from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    CheckBox
} from "react-native";
import {Container, Header, Title, Content, Left, Right, Body, Icon} from 'native-base';
import {Fonts} from "../../utils/Fonts";
import {Button} from "react-native-elements";

class ComplainBackground extends Component {
    render() {
        return (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1,backgroundColor: "#F8BBD0",}}>
                        <Text style={{paddingHorizontal: 10, paddingTop: 15,color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 17}}>
                                ผู้ร้องขอ
                        </Text>
                        <View style={{paddingHorizontal: 10, paddingTop: 20}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                สัญชาติ
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                value='ไทย'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                ชื่อ
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                value='ศุภัตตรา'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                นามสกุล
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                value='มณีชยางค์กุล'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                โทรศัพท์
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                value='085-989-3305'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                ภูมิลำเนา
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                value='กรุงเทพมหานคร'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                รหัสผ่าน
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                secureTextEntry={true}
                                value='กรุงเทพมหานคร'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                ประเภทคำร้อง
                                </Text>
                            <View style={{padding: 5}}></View>
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
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                selectionColor={'#FA527D'}
                                value='ได้รับผลการพิจารณาล่าช้า'
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <Text style={{color: '#ADADAD', fontFamily: Fonts.SukhumvitSetBold, fontSize: 16}}>
                                (รายละเอียด)
                                </Text>
                            <View style={{padding: 5}}></View>
                            <TextInput
                                style={{
                                    height: 240,
                                    width: "100%",
                                    borderColor: '#FFF',
                                    backgroundColor: '#F5F5F5',
                                    borderWidth: 2,
                                    borderRadius: 10,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    fontFamily: Fonts.SukhumvitSetBold,
                                    fontSize: 16,
                                    color: '#FA527D',
                                    textAlign: 'left',
                                }}
                                editable={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{paddingHorizontal: 10, paddingTop: 10}}>
                            <TouchableOpacity style={{
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: {height: 1, width: 1}, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1, //IOS
                                    backgroundColor: '#FA527D',
                                    borderRadius: 15,
                                    elevation: 5, // Android
                                    height: 50,
                                    width: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '100%',
                                    height: 45,
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontFamily: Fonts.SukhumvitSetMedium,
                                        fontSize: 18
                                    }}>
                                        + แนบภาพถ่าย (0 รูปภาพ)
                                    </Text>
                                </TouchableOpacity>
                        </View>
                        <View style={{paddingVertical: 20}}></View>
                        <View style={{flex: 1, flexDirection: 'row',paddingHorizontal: 10}}>
                            <View style={{flex: 2, alignItems: 'flex-start'}}>
                                <TouchableOpacity style={{
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: {height: 1, width: 1}, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1, //IOS
                                    backgroundColor: '#FA527D',
                                    borderRadius: 15,
                                    elevation: 5, // Android
                                    height: 50,
                                    width: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '90%',
                                    height: 45,
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontFamily: Fonts.SukhumvitSetMedium,
                                        fontSize: 18
                                    }}>
                                        บันทึกเสียง
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={{
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: {height: 1, width: 1}, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1, //IOS
                                    backgroundColor: '#FA527D',
                                    borderRadius: 15,
                                    elevation: 5, // Android
                                    height: 50,
                                    width: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    width: '90%',
                                    height: 45,
                                }}>
                                    <Text style={{
                                        color: "#fff",
                                        fontFamily: Fonts.SukhumvitSetMedium,
                                        fontSize: 18
                                    }}>
                                        ยืนยันคำร้อง
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingBottom: 20}}></View>
                    </View>
                </ScrollView>
        )
    }
}

export default class ComplainScreen extends Component {
    render() {
        return (
            <ComplainBackground navigation={this.props.navigation} />
        );
    }
}


const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#fff',

    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    },
});
