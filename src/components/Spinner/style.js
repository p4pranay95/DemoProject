import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
	spinnerContainer: {
		zIndex: 100, 
		justifyContent: 'center',  
		position: 'absolute', 
		width: width, 
		height: height, 
		backgroundColor: 'rgba(52, 52, 52, 0.8)',
	},
	spinner: {
		zIndex: 200,
		alignSelf: 'center',
	},
});