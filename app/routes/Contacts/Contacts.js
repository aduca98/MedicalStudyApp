'use strict'

import React from 'react';
import { Text, View } from 'react-native';
import { makeNavOptions } from '../../config/headerFxn';
import ContactBody from '../../components/ContactBody/ContactBody';

class Contacts extends React.Component {

	static navigationOptions = makeNavOptions('Contacts');

	constructor() {
		super();

	}

	render() {

		return(
			<View>
				
				<ContactBody/>

			</View>
		)

	}
}

export default Contacts;