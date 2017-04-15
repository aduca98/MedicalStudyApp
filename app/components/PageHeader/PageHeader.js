'use strict'

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class PageHeader extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<Text style={styles.header}> {this.props.title}: </Text>
		)

	}
}

export default PageHeader;

