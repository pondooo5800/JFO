//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ChartAgeComponent from "../../component/chart/ChartAgeComponent";
import {Fonts} from "../../utils/Fonts";
import {
    Icon
} from "native-base";
import * as Progress from "react-native-progress";


class OverviewAgeBackground extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1,backgroundColor:'#fff'}}>
                    <View style={{flex: 1}} >
                        <View style={{paddingHorizontal: 25, paddingVertical: 15}}>
                            <Text style={{color: '#000', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 18}}>
                                รายงานผู้ยื่นคำขอ
                                </Text>
                            <Text style={{color: '#949494', fontFamily: Fonts.SukhumvitSetSemiBold, fontSize: 16}}>
                                จำแนกตามช่วงอายุ
                                </Text>
                        </View>
                    </View>

                    <View style={{flex: 2, paddingVertical: 15}} >
                        <ChartAgeComponent />
                    </View>

                    <View style={{flex: 3}} >
                        <View style={{ paddingBottom:25}}/>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default class OverviewAgeScreen extends Component {
    render() {
        return (
            <OverviewAgeBackground navigation={this.props.navigation} />
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
