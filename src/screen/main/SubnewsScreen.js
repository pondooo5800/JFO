import React, {Component} from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import {Container, Header, Title, Content, Left, Right, Body, Icon} from 'native-base';
import {Card, ListItem, Button} from 'react-native-elements'
import {Fonts} from "../../utils/Fonts";

// create a component
class SubnewsBackground extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#FFF'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1,}} >
                    <Image
                        source={require('../../../assets/Image/04.jpg')}
                        resizeMode='stretch'
                        style={{
                            height: 200,
                            width: '100%'
                        }}
                    >
                    </Image>
                </View>
                    <View style={{flex: 3, paddingTop:5,paddingBottom:20}} >
                        <View style={{paddingTop: 10, paddingHorizontal: 10}}>
                            <Text style={{color: '#FD7596', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                “คสช.”ปลื้ม! โชว์ผลงาน”โบว์แดง” “คลอดกม.อื้อ-ผุดกองทุนยุติธรรม”
                            </Text>
                        </View>
                        <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 14}}>
                                โดย Nation TV
                            </Text>
                            <Icon
                                type="Ionicons"
                                name="time"
                                style={{paddingTop: 2, paddingLeft: 10, paddingRight:5, fontSize: 16}}
                            />
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 14}}>
                                03 พ.ย. 61
                            </Text>
                            <Icon
                                type="Entypo"
                                name="bar-graph"
                                style={{paddingTop: 2, paddingLeft: 10, paddingRight:5, fontSize: 16}}
                            />
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 14}}>
                                560
                            </Text>
                            <Icon
                                name="share"
                                style={{paddingTop: 2, paddingLeft: 10, paddingRight:5, fontSize: 16}}
                            />
                            <Text style={{ color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 14 }}>
                                114 ครั้ง
                            </Text>
                        </View>
                        <View style={{paddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <View style={{borderWidth: 0.5,borderColor:'#EDEDED' }}></View>
                        </View>
                        <View style={{paddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <Text style={{ color: '#8A8A8A', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16 }}>
                                รองนายกรัฐมนตรี ด้านกฎหมาย พอใจผลงาน 4 ปี ของ รัฐบาล คสช. สามารถคลอดกม.กว่า 300 ฉบับ พร้อมจัดตั้ง กองทุนยุติธรรมผล ซึ่งถือเป็นผลงานชิ้น”โบว์แดง
                            </Text>
                        </View>
                        <View style={{paddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <Text style={{ color: '#8A8A8A', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16 }}>
                                วันนี้(16 พ.ค.61) นายวิษณุ เครืองาม รองนายกรัฐมนตรี ให้สัมภาษณ์ถึงผลงานครบรอบ 4 ปี ของรัฐบาล คสช.ด้านกฎหมายว่า ตนเห็นว่ามีอะไรออกมาเยอะ ถ้าจะเอาปริมาณมีกว่า 300 ฉบับ ถือว่าจำนวนมากแล้ว แต่ขอให้สนใจเรื่องคุณภาพดีกว่า เพราะปริมาณแสดงถึงความขยัน แต่คุณภาพอาจจะดีบ้างไม่ดีบ้าง
                            </Text>
                        </View>
                        <View style={{paddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <View style={{borderWidth: 0.5,borderColor:'#EDEDED' }}></View>
                        </View>
                        <View style={{flexDirection:'row',paddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <Text style={{ paddingRight:5,color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16 }}>
                                ไฟล์แนบ :
                            </Text>
                            <Text style={{ borderBottomWidth:1,borderColor:'#8A8A8A',color: '#8A8A8A', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16 }}>
                                รายงานผลดำเนิงาน พ.ศ. 2561.pdf
                            </Text>
                        </View>
                        <View style={{paddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <View style={{borderWidth: 0.5,borderColor:'#EDEDED' }}></View>
                        </View>
                        <View style={{fpaddingVertical:5,paddingLeft:10,paddingRight:10}}>
                            <Text style={{ paddingRight:5,color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18 }}>
                                ข่าวสารอื่น ๆที่น่าสนใจ
                            </Text>
                        </View>
                            <TouchableWithoutFeedback>
                                    <Card
                                        borderRadius={5}
                                        imageStyle={{
                                            borderTopLeftRadius: 15,
                                            borderTopRightRadius: 15,
                                            overflow: "hidden"
                                        }}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            borderColor: "#ddd",
                                            shadowColor: "#000",
                                            shadowOffset: {width: 0, height: 2},
                                            shadowOpacity: 0.8,
                                            shadowRadius: 0.5,
                                            elevation: 1,
                                            marginLeft: 10,
                                            marginRight: 10,
                                            marginTop: 10
                                        }}
                                        image={require("../../../assets/Image/01.jpg")}
                                        resizeMode='stretch'
                                    >
                                        <View>
                                            <Text
                                                style={{
                                                    marginTop: 5,
                                                    fontFamily: Fonts.SukhumvitSetSemiBold,
                                                    fontSize: 16,
                                                    color: "#FD7596"
                                                }}
                                            >
                                                กองทุนยุติธรรม ให้ความช่วยเหลือประชาชน
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: "row"}}>
                                            <Text
                                                style={{
                                                    marginTop: 5,
                                                    paddingRight: 10,
                                                    fontFamily: Fonts.SukhumvitSetSemiBold,
                                                    fontSize: 14,
                                                    color: "#000"
                                                }}
                                            >
                                                โดย Nation TV
                                            </Text>
                                            <Icon
                                                type="Ionicons"
                                                name="time"
                                                style={{paddingTop: 8, paddingRight: 10, fontSize: 16}}
                                            />
                                            <Text
                                                style={{
                                                    marginTop: 5,
                                                    paddingRight: 10,
                                                    fontFamily: Fonts.SukhumvitSetText,
                                                    fontSize: 14,
                                                    color: "#000"
                                                }}
                                            >
                                                2 ชั่วโมงที่แล้ว
                                            </Text>
                                        </View>
                                    </Card>
                            </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default class SubnewsScreen extends Component {
    render() {
        return (
            <SubnewsBackground navigation={this.props.navigation} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
