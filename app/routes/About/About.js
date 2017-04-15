'use strict'

import React from 'react';
import { Text, View } from 'react-native';
import { makeNavOptions } from '../../config/headerFxn'

class About extends React.Component {

	static navigationOptions = makeNavOptions('About')

	render() {

		return(
			<Text> About </Text>
		)

	}
}

export default About;