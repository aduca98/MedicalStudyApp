import React from 'react';
import { View, Text } from 'react-native';

export function renderList(listElements) {
	return listElements.map((element, index) => (
		<NumberList indexNum={index + 1} element={element} key={index}/>
	))
}

class NumberList extends React.Component {

	render() {

		return(
			<Text>{this.props.indexNum}. {this.props.element} </Text>
		)

	}
}
