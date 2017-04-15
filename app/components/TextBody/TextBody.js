'use strict'

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

class TextBody extends React.Component {

	render() {

		return(
			<Text style={styles.text}>
				{this.props.textBody}
			</Text>
		)

	}

}

export default TextBody;