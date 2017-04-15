'use strict'

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles.js';

class ContactBody extends React.Component {

	constructor() {
		super();

	}

	render() {

		var contacts = [

			{
				"id": 1,
				"name": "Vanessa Tassell",
				"position": "Executive Director, Clinical Science",
				"phone": "858-332-3438",
				"email": "tassellv@mirati.com"
			},
			{
				"id": 2,
				"name": "Richard Chao, MD",
				"position": "Executive Medical Director",
				"phone": "858-332-3427",
				"email": "chaor@mirati.com"
			},
			{
				"id": 3,
				"name": "Hirak Der-Torossian, MD",
				"position": "Medical Director",
				"phone": "858-332-3556",
				"email": "der-torossianh@mirati.com"
			},
			{
				"id": 4,
				"name": "Karen Velastegui",
				"position": "Director, Clinical Science",
				"phone": "858-332-3522",
				"email": "velasteguik@mirati.com"
			},
			{
				"id": 5,
				"name": "Claire Padgett, PhD",
				"position": "Senior Vice President, Clinical Operations",
				"phone": "858-332-3436",
				"email": "padgettc@mirati.com"
			}

		]

		var contactsList = contacts.map((contact) => {
			return( 
				<View key={contact.id} style={styles.oneContact}> 
					<Text style={styles.oneLineForContact}> {contact.name} </Text> 
					<Text style={styles.oneLineForContact}> {contact.position} </Text> 
					<Text style={styles.oneLineForContact}> {contact.phone} </Text> 
					<Text style={styles.oneLineForContact}> {contact.email} </Text> 
				</View>
			)
		});

		return(
			<ScrollView>
				
				{contactsList}

			</ScrollView>
		)

	}

}

export default ContactBody;