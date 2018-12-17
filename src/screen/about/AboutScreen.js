import React, {Component} from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import {
    Container,
    Content,
    Tab,
    Tabs,
    ScrollableTab
} from 'native-base';
import {Fonts} from "../../utils/Fonts";
import Tab1 from './SubAboutFoundScreen'
import Tab2 from './SubAboutHelpScreen'
import Tab3 from './SubAboutContactScreen'


class AboutBackground extends Component {
    render() {
        return (
            <Container>
                <Content showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, padding: 15, paddingBottom: 15}}>
                            <Image
                                source={require('../../../assets/Image/about.jpg')}
                                resizeMode='stretch'
                                style={{
                                    borderWidth: 2,
                                    borderRadius: 15,
                                    overflow: 'hidden',
                                    height: 200,
                                    width: '100%'
                                }}
                            >
                            </Image>
                        </View>
                    </View>
                    <Tabs
                        renderTabBar={() =>
                            <ScrollableTab style={{
                                width: '100%',
                                backgroundColor: '#FFF',
                            }}
                                tabsContainerStyle={{width: 411}} />}
                        tabBarUnderlineStyle={{borderBottomWidth: 2, borderColor: '#FDCB67'}}>
                        <Tab heading="การก่อตั้ง" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#000', fontWeight: '200', fontSize: 16, fontFamily: Fonts.SukhumvitSetSemiBold}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#FA527D', fontWeight: '200', fontSize: 16, fontFamily: Fonts.SukhumvitSetSemiBold, }}>
                            <Tab1 />
                        </Tab>
                        <Tab heading="การให้ความช่วยเหลือ" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#000', fontWeight: '200', fontSize: 16, fontFamily: Fonts.SukhumvitSetSemiBold}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#FA527D', fontWeight: '200', fontSize: 16, fontFamily: Fonts.SukhumvitSetSemiBold, }}>
                            <Tab2 />
                        </Tab>
                        <Tab heading="การติดต่อ" tabStyle={{backgroundColor: '#fff'}} textStyle={{color: '#000', fontWeight: '200', fontSize: 16, fontFamily: Fonts.SukhumvitSetSemiBold}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#FA527D', fontWeight: '200', fontSize: 16, fontFamily: Fonts.SukhumvitSetSemiBold, }}>
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>

        )
    }
}

export default class AboutScreen extends Component {
    render() {
        return (
            <AboutBackground navigation={this.props.navigation} />
        );
    }
}


const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#fff',

    },
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 15
    },
});