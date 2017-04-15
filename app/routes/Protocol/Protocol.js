'use strict'

import React from 'react';
import { View, Text, WebView } from 'react-native';
import { makeNavOptions } from '../../config/headerFxn'

class Protocol extends React.Component {

	static navigationOptions = makeNavOptions('Protocol')

	render() {

		return(

			<WebView 
				source={{uri: 'https://s3-us-west-2.amazonaws.com/www.pencilpay.com/protocol.pdf'}}
    			style={{width: '100%'}}
    		/>

		)
	}
}

export default Protocol