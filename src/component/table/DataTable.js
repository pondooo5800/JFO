import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import {Fonts} from '../../utils/Fonts';

export default class ExampleTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['ภาคเหนือ',],
            subtableData: [
                ['3,047']
            ],
            subDataHead: [
                ['1,250', '1,150']
            ],
            tableTitle: ['เชียงราย', 'เชียงใหม่', 'น่าน', 'แพร่', 'พะเยา', 'แม่ฮ่องสอน', 'ลำปาง', 'ลำพูน'],
            tableData: [
                ['236'],
                ['112'],
                ['283'],
                ['813'],
                ['623'],
                ['441'],
                ['143'],
                ['102']
            ],
            subData: [
                ['236', '236',],
                ['112', '112',],
                ['283', '283',],
                ['813', '813',],
                ['623', '623',],
                ['441', '441',],
                ['143', '143',],
                ['102', '102',]
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <Table borderStyle={{borderWidth: 1, borderColor: '#F5F5F5'}}>
                <TableWrapper style={styles.wrapper}>
                    <Col data={state.tableHead} heightArr={[30, 30]} style={styles.title} textStyle={styles.textTitle} />
                    <Rows data={state.subtableData} flexArr={[1,]} style={styles.row} textStyle={styles.textsubtitle} />
                    <Rows data={state.subDataHead} flexArr={[1, 1]} style={styles.rowtitle} textStyle={styles.text} />
                </TableWrapper>
                <TableWrapper style={styles.wrapper}>
                    <Col data={state.tableTitle} style={styles.subtitle} heightArr={[30, 30]} textStyle={styles.subtextTitle} />
                    <Rows data={state.tableData} flexArr={[1,]} style={styles.row} textStyle={styles.textsubtitle} />
                    <Rows data={state.subData} flexArr={[1, 1]} style={styles.rowtitle} textStyle={styles.text} />
                </TableWrapper>
            </Table>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head: {
        height: 40,
        backgroundColor: '#fff'
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 2,
        backgroundColor: '#fff',
    },
    subtitle: {
        flex: 2,
        backgroundColor: '#fff',
    },
    rowtitle: {
        height: 30,
        backgroundColor: '#E7EEEE',
    },
    row: {
        height: 30,
    },
    textTitle: {
        paddingLeft: 5,
        textAlign: 'left',
        fontFamily:Fonts.SukhumvitSetSemiBold,
        fontSize: 16,
        color:'#FA527D'
    },
    subtextTitle: {
        paddingLeft: 20,
        textAlign: 'left',
        fontFamily:Fonts.SukhumvitSetSemiBold,
        fontSize: 16,
        color:'#FF9300'
    },
    text: {
        textAlign: 'center',
        fontFamily:Fonts.SukhumvitSetSemiBold,
        fontSize: 14,
    },
    textsubtitle: {
        textAlign: 'center',
        fontFamily:Fonts.SukhumvitSetSemiBold,
        fontSize: 14,
        color:'#5E869B'
    },
});