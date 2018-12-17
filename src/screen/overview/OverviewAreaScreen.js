//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ChartAreaComponent from "../../component/chart/ChartAreaComponent";
import {Fonts} from "../../utils/Fonts";
import HeadTable from '../../component/table/HeadTable';
import DataTable from '../../component/table/DataTable';

import {
    Icon
} from "native-base";


class OverviewAreaBackground extends Component {
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
                                จำแนกรายพื้นที่
                                </Text>
                        </View>
                    </View>

                    <View style={{flex: 2, paddingVertical: 25}} >
                        <ChartAreaComponent />
                    </View>

                    <View style={{flex: 3}} >
                        <View>
                            <HeadTable/>
                        </View>
                        <View>
                            <DataTable/>
                        </View>
                        <View style={{ paddingBottom:25}}/>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default class OverviewAreaScreen extends Component {
    render() {
        return (
            <OverviewAreaBackground navigation={this.props.navigation} />
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
