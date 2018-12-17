import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Routes from './Routes';
import IntroScreen from './src/screen/intro/IntroScreen';
import {name as appName} from './app.json';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'IntroScreen' };
        setTimeout(()=>{
            this.setState({ currentScreen: 'Routes' })
        }, 4500)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'IntroScreen' ? <IntroScreen /> : <Routes />
        return mainScreen
    }
}

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Main);
