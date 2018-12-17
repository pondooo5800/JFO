import React, {Component} from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import {
    Icon
} from "native-base";
import {Card, ListItem, Button} from "react-native-elements";
import Swiper from "react-native-swiper";
import {Fonts} from "../../utils/Fonts";

class MainBackground extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, backgroundColor: '#FFF'}}>
                    <View style={{flex: 1.5, marginBottom: 10}}>
                        <Swiper
                            height={200}
                            horizontal={true}
                            autoplay
                            dot={
                                <View
                                    style={{
                                        backgroundColor: "rgba(255,255,255,.3)",
                                        width: 8,
                                        height: 8,
                                        borderRadius: 7,
                                        marginLeft: 4,
                                        marginRight: 4
                                    }}
                                />
                            }
                            activeDot={
                                <View
                                    style={{
                                        backgroundColor: "#fff",
                                        width: 8,
                                        height: 8,
                                        borderRadius: 7,
                                        marginLeft: 4,
                                        marginRight: 4
                                    }}
                                />
                            }
                            paginationStyle={{
                                bottom: 10
                            }}
                            loop
                        >
                            <View style={{justifyContent: "center", alignItems: "center"}}>
                                <ImageBackground
                                    style={{width: "100%", height: "100%"}}
                                    source={require("../../../assets/Image/01.jpg")}
                                    resizeMode='stretch'
                                >
                                    <Text
                                        style={{
                                            paddingTop: 150,
                                            paddingLeft: 10,
                                            fontFamily: Fonts.SukhumvitSetBold,
                                            fontSize: 16,
                                            color: "#fff"
                                        }}
                                    >
                                        กองทุนยุติธรรมสู่ประชาชนตามโครงการไทยนิยม ยั่งยืน
                                    </Text>
                                    <Text
                                        style={{
                                            paddingLeft: 10,
                                            fontFamily: Fonts.SukhumvitSetText,
                                            fontSize: 14,
                                            color: "#fff"
                                        }}
                                    >
                                        โดย Nation TV
                                    </Text>
                                </ImageBackground>
                            </View>
                            <View style={{justifyContent: "center", alignItems: "center"}}>
                                <ImageBackground
                                    style={{width: "100%", height: "100%"}}
                                    source={require("../../../assets/Image/02.jpg")}
                                    resizeMode='stretch'
                                >
                                    <Text
                                        style={{
                                            paddingTop: 150,
                                            paddingLeft: 10,
                                            fontFamily: Fonts.SukhumvitSetBold,
                                            fontSize: 16,
                                            color: "#fff"
                                        }}
                                    >
                                        สำนักงานกองทุนยุติธรรม มีภารกิจหลักในการรับคำขอรับ...
                                    </Text>
                                    <Text
                                        style={{
                                            paddingLeft: 10,
                                            fontFamily: Fonts.SukhumvitSetText,
                                            fontSize: 14,
                                            color: "#fff"
                                        }}
                                    >
                                        โดย Nation TV
                                    </Text>
                                </ImageBackground>
                            </View>
                            <View style={{justifyContent: "center", alignItems: "center"}}>
                                <ImageBackground
                                    style={{width: "100%", height: "100%"}}
                                    source={require("../../../assets/Image/03.jpg")}
                                    resizeMode='stretch'
                                >
                                    <Text
                                        style={{
                                            paddingTop: 150,
                                            paddingLeft: 10,
                                            fontFamily: Fonts.SukhumvitSetBold,
                                            fontSize: 16,
                                            color: "#fff"
                                        }}
                                    >
                                        สำนักงานกองทุนยุติธรรม ให้บริการวันหยุดราชการ
                                    </Text>
                                    <Text
                                        style={{
                                            paddingLeft: 10,
                                            fontFamily: Fonts.SukhumvitSetText,
                                            fontSize: 14,
                                            color: "#fff"
                                        }}
                                    >
                                        โดย NBT
                                    </Text>
                                </ImageBackground>
                            </View>
                        </Swiper>
                    </View>

                    <View style={{flex: 3}}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SubnewsScreen')}>
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
                                    marginTop: 20
                                }}
                                image={require("../../../assets/Image/04.jpg")}
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
                                        “คสช.”ปลื้ม! โชว์ผลงาน”โบว์แดง” “คลอดกม.อื้อ-ผุดกองทุนยุติธรรม”
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
                                        03 พ.ย. 61
                                        </Text>
                                </View>
                            </Card>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SubnewsScreen')}>
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
                                    marginTop: 20
                                }}
                                image={require("../../../assets/Image/02.jpg")}
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
                                        กองทุนยุติธรรม มีภารกิจหลักในการรับคำขอรับ
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
                                        โดย NBT
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
                                        27 ต.ค. 61
                                        </Text>
                                </View>
                            </Card>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SubnewsScreen')}>
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
                                    marginTop: 20
                                }}
                                image={require("../../../assets/Image/03.jpg")}
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
                                        กองทุนยุติธรรม ให้บริการวันหยุดราชการ
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
                                        โดย NBT
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
                                        15 ต.ค. 61
                                        </Text>
                                </View>
                            </Card>
                        </TouchableWithoutFeedback>
                        <View style={{marginTop: 30}} />
                    </View>
                </View>
            </ScrollView>

        );
    }
}
export default class MainScreen extends Component {
    render() {
        return (
            <MainBackground navigation={this.props.navigation} />
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    header: {
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: "#fff"
    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    }
});
