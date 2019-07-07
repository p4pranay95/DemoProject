import { StyleSheet } from 'react-native';
import scale from '../../utils/scale';

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	headerText: {
		color: 'white',
		fontSize: scale(18),
		fontWeight: 'bold'
	},
	headerContainer: {
		alignItems: 'center',
		backgroundColor: 'rgb(45,228,197)',
		flexDirection:'row', 
		paddingHorizontal: scale(20), 
		paddingVertical: scale(15), 
		justifyContent:'space-between',
		borderWidth: 2,
		borderColor: 'rgb(211,211,211)',
		borderTopWidth: 0,
	},
	imageContainer: {
		flex:0.15, 
		justifyContent:'center', 
		alignItems:'center'
	},
	contentText: {
		marginTop: scale(10),
		color: 'rgb(146,146,146)',
		fontSize: scale(12),
	},
	itemCellContainer: {
		flexDirection:'row', 
		marginHorizontal: scale(15), 
		marginTop: scale(15)
	},
	circleStyle: {
		height: scale(40), 
		width: scale(40), 
		borderRadius:scale(20), 
		backgroundColor:'rgb(154,154,154)'
	},
});