
import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import {Fonts} from "../../utils/Fonts";

export default class ChartComponent extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 20,
                title:'(2) แสวงหาข้อเท็จจริง 20%',
                color:'#5D4037',
                svg: { fill: '#FFCC10' },
            },
            {
                key: 2,
                amount: 8,
                title:'(3) แจ้งผลพิจารณา 8%',
                color:'#FF5722',
                svg: { fill: '#8FC45A' }
            },
            {
                key: 3,
                amount: 72,
                title:'(1) ยื่นขอรับความช่วยเหลือ 72%',
                color:'#009688',
                svg: { fill: '#8CB4D6' }
            },
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={data.color}
                        fontFamily={Fonts.SukhumvitSetBold}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={14}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.title}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 200,}}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'100%'}
                innerRadius={5}

            >
                <Labels/>
            </PieChart>
        )
    }

}
