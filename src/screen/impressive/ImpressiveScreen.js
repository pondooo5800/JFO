import React, {Component} from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import {
    Icon
} from "native-base";
import Swiper from "react-native-swiper";
import {Fonts} from "../../utils/Fonts";

class ImpressiveBackground extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1.3, }} >
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
                                style={{
                                    borderWidth: 3,
                                    borderRadius: 15,
                                    overflow: 'hidden',
                                    height: '100%',
                                    width: '100%',
                                    borderColor: '#FFF'
                                }}
                                source={require("../../../assets/Image/08.jpg")}
                                resizeMode='stretch'
                            >
                                <View style={{paddingTop: 150}}>
                                    <Text style={{textAlign: 'center', color: '#FFF', fontFamily: Fonts.SukhumvitSetBold, fontSize: 20}}>
                                        บอกเรื่องราวสุดประทับใจของคุณ
                                </Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text
                                            style={{
                                                fontFamily: Fonts.SukhumvitSetBold,
                                                fontSize: 20,
                                                color: "#FFF",
                                            }}
                                        >
                                            เพื่อเป็นกำลังใจให้เรา
                                        </Text>
                                        <Text
                                            style={{
                                                paddingLeft: 5,
                                                fontFamily: Fonts.SukhumvitSetBold,
                                                fontSize: 20,
                                                color: "#E98311",
                                            }}
                                        >
                                            "กองทุนยุติธรรม"
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{justifyContent: "center", alignItems: "center"}}>
                            <ImageBackground
                                style={{
                                    borderWidth: 3,
                                    borderRadius: 15,
                                    overflow: 'hidden',
                                    height: '100%',
                                    width: '100%',
                                    borderColor: '#FFF'
                                }}
                                source={require("../../../assets/Image/07.jpg")}
                                resizeMode='stretch'
                            >
                                <View style={{paddingTop: 150}}>
                                    <Text style={{textAlign: 'center', color: '#FFF', fontFamily: Fonts.SukhumvitSetBold, fontSize: 20}}>
                                        บอกเรื่องราวสุดประทับใจของคุณ
                                </Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text
                                            style={{
                                                fontFamily: Fonts.SukhumvitSetBold,
                                                fontSize: 20,
                                                color: "#FFF",
                                            }}
                                        >
                                            เพื่อเป็นกำลังใจให้เรา
                                        </Text>
                                        <Text
                                            style={{
                                                paddingLeft: 5,
                                                fontFamily: Fonts.SukhumvitSetBold,
                                                fontSize: 20,
                                                color: "#E98311",
                                            }}
                                        >
                                            "กองทุนยุติธรรม"
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                    </Swiper>

                </View>
                <View style={{flex: 2, }} >
                <TouchableWithoutFeedback>
                <View style={{ paddingTop:20, }}>
                    </View>

                </TouchableWithoutFeedback>


                </View>
            </View>
        );
    }
}
export default class ImpressiveScreen extends Component {
    render() {
        return (
            <ImpressiveBackground navigation={this.props.navigation} />
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
