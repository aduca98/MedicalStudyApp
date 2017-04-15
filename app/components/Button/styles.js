import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center', 
		alignItems: 'center',
		width: '80%',
		alignItems: 'center',
		marginBottom: 10,
		borderRadius: 20,
		borderColor: colors.teal ,
		borderWidth: 3,
		backgroundColor: colors.purple,
		height: 60,
	},
	buttonText: {
		color: '#FFF',
		textAlign: 'center',
		fontSize: 20,
		width: '80%'
	}
})

export default styles;