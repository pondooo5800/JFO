
import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import {Fonts} from "../../utils/Fonts";

export default class ChartAreaComponent extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 20,
                title:'ภาคเหนือ 20%',
                color:'#AAAAAA',
                x:130,
                y:-80,
                svg: { fill: '#FF2600' },
            },
            {
                key: 2,
                amount: 10,
                title:'ภาคตะวันตก 10%',
                color:'#AAAAAA',
                x:180,
                y:-20,
                svg: { fill: '#D695AA' }
            },
            {
                key: 3,
                amount: 15,
                title:'ภาคตะวันออก 15%',
                color:'#AAAAAA',
                x:160,
                y:50,
                svg: { fill: '#EDF4F5' }
            },
            {
                key: 4,
                amount: 10,
                title:'ภาคใต้ 10%',
                color:'#AAAAAA',
                x:70,
                y:80,
                svg: { fill: '#E36B62' },
            },
            {
                key: 5,
                amount: 35,
                title:'ภาคกลาง 35%',
                color:'#AAAAAA',
                x:-65,
                y:0,
                svg: { fill: '#FA527D' }
            },
            {
                key: 6,
                amount: 10,
                title:'ภาคตะวันออกเฉียงเหนือ 10%',
                color:'#AAAAAA',
                x:-20,
                y:-90,
                svg: { fill: '#FDDFE4' }
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
                        textAnchor={'end'}
                        alignmentBaseline={'top'}
                        x={data.x}
                        y={data.y}
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
                innerRadius={40}

            >
                <Labels/>
            </PieChart>
        )
    }

}
