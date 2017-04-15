import React from 'react';
import { View, Button , TouchableHighlight, TouchableOpacity, Text } from 'react-native';
import styles from './styles.js';

class StylishButton extends React.Component {

	render() {

		return(

			<TouchableHighlight 
				style={styles.button}
				onPress={this.props.onPress}
			>
				
				<Text style={styles.buttonText}> {this.props.title} </Text>

			</TouchableHighlight>
		)

	}

}

export default StylishButton;