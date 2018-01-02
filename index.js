import React, { Component } from 'react';
import App from './App';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';

export default class RNCognito extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('RNCognito', () => RNCognito);