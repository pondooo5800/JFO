import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import {Fonts} from '../../utils/Fonts';

class HeadTable extends Component {
    render() {
        return (
            <Grid >
                <Col style={styles.contentArea}>
                    <Text style={styles.fonts}>พื้นที่</Text>
                </Col>
                <Col>
                    <Row style={styles.contentHelp}>
                        <Text style={styles.fonts}>คำขอรับความช่วยเหลือ (ราย)</Text>
                    </Row>
                    <Row style={styles.contentSubHelp}>
                        <Col style={styles.colVolume} >
                            <Text style={[styles.fonts,{fontSize:14}]}>ปริมาณ</Text>
                        </Col>
                        <Col style={styles.colVolume} >
                            <Text style={[styles.fonts,{fontSize:14}]}>เปรียบเทียบ</Text>
                        </Col>
                        <Col style={styles.colSettlement} >
                            <Text style={[styles.fonts,{fontSize:14}]}>ส่วนต่าง</Text>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    contentArea: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '35%',
        backgroundColor: '#FA527D',
        borderRightColor: '#CFD8DC',
        borderRightWidth: 1
    },
    contentHelp: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#FA527D',
        borderBottomColor: '#CFD8DC',
        borderBottomWidth: 1
    },
    contentSubHelp: {
        height: 50,
        borderBottomColor: '#CFD8DC',
        borderBottomWidth: 1
    },
    colVolume: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FA527D',
        borderColor: '#CFD8DC',
        borderRightWidth: 1
    },
    colSettlement: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FA527D'
    },
    fonts: {
        fontFamily:Fonts.SukhumvitSetSemiBold,
        fontSize: 16,
        color:'white'
    }
});

export default HeadTable;