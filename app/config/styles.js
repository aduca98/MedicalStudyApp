import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({

	header: {
		backgroundColor: 'blue',
	},
	
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	buttonsContainer: {
		marginTop: 125
	},

	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},

	wave: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
	},

	logo: {
		width: 225,
		height: 100,
		position: 'absolute',
		top: 20,
	},
	checkbox: {
		alignItems: 'center',
		justifyContent: 'center',
	}

})

export default mainStyle;