import React from 'react';
import { TouchableHighlight, Text, Image } from 'react-native';

import colors from './colors';
import inclusion from '../images/incl_but.jpg';

export function makeNavOptions(title) {

	return(

		{
			title: title,
			
			header: {

				titleStyle: {
					color: '#FFF',
				},

				style: {
					backgroundColor: colors.purple,
				},  

				tintColor: '#FFF',  

				barStyle: "light-content",


			},

			barStyle: 'light-content',

		}

	)

}

export function makeNavOptionsWithRight(title, nav) {

	return(

		{
			title: title,
			
			header: {

				titleStyle: {
					color: '#FFF',
				},

				style: {
					backgroundColor: colors.purple,
				},  

				tintColor: '#FFF',  

				barStyle: "light-content",

				right: <TouchableHighlight onPress={() => navigate('Exclusion')}>
					      <Image
					        source={inclusion}
					      />
					    </TouchableHighlight>,

			},

			barStyle: 'light-content',

		}

	)

}