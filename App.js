/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView
} from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
// import Orientation from 'react-native-orientation';
import AppRoute from './src/AppRoot';
import Spinner from './src/components/Spinner';

export default class App extends Component<{}> {

	constructor(props) {
		super(props)
		this.state = {
			store: configureStore(() => {
				console.log('Store persisted !');
			})
		}
	}

	spinner() {
		return (
			<Spinner />
		)
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Provider store={this.state.store}>
					<View style={styles.container}>
						<AppRoute />
						{this.spinner()}
					</View>
				</Provider>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
