import React, {Component} from "react";
import {Image, View, Text, StyleSheet} from "react-native";
import {Fonts} from "../../utils/Fonts";
import LinearGradient from "react-native-linear-gradient";
import * as Progress from "react-native-progress";

class BackgroundImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = 0;
        this.setState({progress});
        setTimeout(() => {
            this.setState({indeterminate: false});
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({progress});
            }, 300);
        }, 500);
    }
    render() {
        return (
            <LinearGradient
                colors={[
                    "#FDC669",
                    "#FCA474",
                    "#FB887D",
                    "#FB7B81",
                    "#FA6886",
                    "#FA5D89"
                ]}
                start={{y: 0.0, x: 1.0}}
                end={{y: 1.0, x: 1.0}}
                style={styles.background}
            >
                <View style={styles.contentMain}>
                    <View style={styles.content1} />
                    <View style={styles.content2}>
                        <Image
                            source={require("../../../assets/Image/mascot.png")}
                            style={styles.images}
                        />
                        <View style={{paddingTop: 40}}>
                            <Text style={styles.textTitle}>กองทุนยุติธรรม</Text>
                        </View>
                        <View style={{paddingTop: 5}}>
                            <Text style={styles.textSubTitle}>JUSTICE FUND THAILAND</Text>
                        </View>
                        <View style={{paddingTop: 40}}>
                            <Progress.Bar
                                style={styles.progress}
                                color={["#FDCB67"]}
                                backgroundColor={['#fff']}
                                progress={this.state.progress}
                                width={200}
                            />
                        </View>
                    </View>
                    <View style={styles.content3} />
                </View>
            </LinearGradient>
        );
    }
}

class IntroScreen extends Component {
    render() {
        return <BackgroundImage />;
    }
}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%"
    },
    contentMain: {
        flex: 1
    },
    content1: {
        flex: 0.5
    },
    content2: {
        flex: 3,
        alignItems: "center",
        paddingTop: "20%"
    },
    content3: {
        flex: 0.5
    },
    images: {
        width: 160,
        height: 200
    },
    textTitle: {
        fontSize: 28,
        color: "#ffffff",
        fontFamily: Fonts.SukhumvitSetMedium
    },
    textSubTitle: {
        fontSize: 12,
        color: "#ffffff",
        fontFamily: Fonts.SukhumvitSetSemiBold
    },
    progress: {
        borderColor: "#FDCB67"
    }
});

export default IntroScreen;