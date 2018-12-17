//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ChartComponent from "../../component/chart/ChartComponent";
import {Fonts} from "../../utils/Fonts";
import {
    Icon
} from "native-base";
import * as Progress from "react-native-progress";


class OverviewHelpBackground extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1,backgroundColor:'#fff'}}>
                    <View style={{flex: 1}} >
                        <View style={{paddingHorizontal: 25, paddingVertical: 15}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                รายงานคำขอรับความช่วยเหลือ
                                </Text>
                            <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                จำแนกตามประเภทกรณีคำขอ
                                </Text>
                        </View>
                    </View>

                    <View style={{flex: 2, paddingVertical: 15}} >
                        <ChartComponent />
                    </View>

                    <View style={{flex: 3}} >
                        <TouchableOpacity >
                            <View style={{paddingHorizontal: 25, }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50 / 2,
                                        backgroundColor: '#68BC36',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} >
                                        <Icon
                                            type="Octicons"
                                            name="law"
                                            style={{color: 'white', fontSize: 32}}
                                        />
                                    </View>

                                    <View>
                                        <View style={{paddingHorizontal: 15, }}>
                                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                                กรณีช่วยเหลือในการดำเนินคดี
                                                </Text>
                                        </View>
                                        <View style={{paddingVertical: 5, paddingHorizontal: 15, }}>
                                            <Progress.Bar
                                                color={["#68BC36"]}
                                                borderColor={['#CCCCCC']}
                                                backgroundColor={['#CCCCCC']}
                                                progress={0.8}
                                                width={200}
                                            />
                                        </View>
                                    </View>
                                    <Text style={{paddingVertical: 15, paddingHorizontal: 15, color: '#68BC36', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                        89
                                        </Text>
                                    <Icon
                                        type="Octicons"
                                        name="chevron-right"
                                        style={{color: 'black', alignItems: 'center', justifyContent: 'center', fontSize: 30}}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingTop:25}}>
                            <View style={{paddingHorizontal: 25, }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50 / 2,
                                        backgroundColor: '#DEAD26',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} >
                                        <Icon
                                            type="Entypo"
                                            name="block"
                                            style={{color: 'white', fontSize: 32}}
                                        />
                                    </View>

                                    <View>
                                        <View style={{paddingHorizontal: 15, }}>
                                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                                กรณีขอปล่อยตัวชั่วคราว
                                                </Text>
                                        </View>
                                        <View style={{paddingVertical: 5, paddingHorizontal: 15, }}>
                                            <Progress.Bar
                                                color={["#DEAD26"]}
                                                borderColor={['#CCCCCC']}
                                                backgroundColor={['#CCCCCC']}
                                                progress={0.3}
                                                width={200}
                                            />
                                        </View>
                                    </View>
                                    <Text style={{paddingVertical: 15, paddingHorizontal: 15, color: '#DEAD26', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                        30
                                        </Text>
                                    <Icon
                                        type="Octicons"
                                        name="chevron-right"
                                        style={{color: 'black', alignItems: 'center', justifyContent: 'center', fontSize: 30}}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingTop:25}}>
                            <View style={{paddingHorizontal: 25, }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50 / 2,
                                        backgroundColor: '#000',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} >
                                        <Icon
                                            type="Ionicons"
                                            name="ios-woman"
                                            style={{color: 'white', fontSize: 32}}
                                        />
                                    </View>

                                    <View>
                                        <View style={{paddingHorizontal: 15, }}>
                                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                                กรณีช่วยเหลือผู้ถูกล่วงละเมิด
                                                </Text>
                                        </View>
                                        <View style={{paddingVertical: 5, paddingHorizontal: 15, }}>
                                            <Progress.Bar
                                                color={["#000"]}
                                                borderColor={['#CCCCCC']}
                                                backgroundColor={['#CCCCCC']}
                                                progress={0.9}
                                                width={200}
                                            />
                                        </View>
                                    </View>
                                    <Text style={{paddingVertical: 15, paddingHorizontal: 15, color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                        95
                                        </Text>
                                    <Icon
                                        type="Octicons"
                                        name="chevron-right"
                                        style={{color: 'black', alignItems: 'center', justifyContent: 'center', fontSize: 30}}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>

                                            <TouchableOpacity style={{paddingTop:25}}>
                            <View style={{paddingHorizontal: 25, }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50 / 2,
                                        backgroundColor: '#3A8EED',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} >
                                        <Icon
                                            type="MaterialCommunityIcons"
                                            name="react"
                                            style={{color: 'white', fontSize: 32}}
                                        />
                                    </View>

                                    <View>
                                        <View style={{paddingHorizontal: 15, }}>
                                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                                กรณีโครงการส่งเสริมให้ความรู้
                                                </Text>
                                        </View>
                                        <View style={{paddingVertical: 5, paddingHorizontal: 15, }}>
                                            <Progress.Bar
                                                color={["#3A8EED"]}
                                                borderColor={['#CCCCCC']}
                                                backgroundColor={['#CCCCCC']}
                                                progress={0.6}
                                                width={200}
                                            />
                                        </View>
                                    </View>
                                    <Text style={{paddingVertical: 15, paddingHorizontal: 15, color: '#3A8EED', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                        60
                                        </Text>
                                    <Icon
                                        type="Octicons"
                                        name="chevron-right"
                                        style={{color: 'black', alignItems: 'center', justifyContent: 'center', fontSize: 30}}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ paddingBottom:25}}/>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default class OverviewHelpScreen extends Component {
    render() {
        return (
            <OverviewHelpBackground navigation={this.props.navigation} />
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
