'use strict'

import React from 'react';
import { Text, View, Button, ScrollView, TouchableHighlight, Image } from 'react-native';
import styles from './styles'

import { renderList } from '../../components/NumberList/NumberList';
import { makeNavOptions, makeNavOptionsWithRight } from '../../config/headerFxn';

class InclusionCriteria extends React.Component {

	constructor(props) {
		super(props)
		
	}

	static navigationOptions = ({ navigate }) => {
	  console.log('Running function');
	  const {state, setParams} = navigation;
	  const isExclusion = state.params.mode === 'ExclusionCriteria'; // returns true or false
	  return {
	    title: isExclusion ? 'Exclusion Criteria' : 'Inclusion Criteria',
	    headerRight: (
	      <Button
	        title={isExclusion ? 'Inclusion' : 'Exclusion'}
	        onPress={() => { 
	        	console.warn('Pressed'); 
	        	setParams({ mode: isExclusion ? 'InclusionCriteria' : 'ExclusionCriteria'})
	        }}
	      />
	    ),
	  };
	};

	// static navigationOptions = {
	//     title: 'Inclusion Criteria',
	// };

	render() {

		const { navigate } = this.props.navigation;

		return(
			<View>

				<TouchableHighlight style={styles.position} onPress={() => navigate('ExclusionCriteria')}>
			      <Image
			        style={styles.button}
			        source={require('../../images/excl_but.jpg')}
			      />
			    </TouchableHighlight>

				<ScrollView style={styles.padding}>

					<Text style={styles.Text}>1. Histologically confirmed NSCLC with metastatic or unresectable, locally advanced disease.</Text>
					<Text style={styles.Text}>2. Receipt of at least one prior platinum-containing chemotherapy or licensed immunotherapy regimen in the advanced disease setting.</Text>
					<Text style={styles.Text}>3. Molecular analysis of patient-derived samples using a Sponsor- approved method and laboratory that demonstrates a genetic alteration activating MET in tumor tissue and/or ctDNA.  If eligibility is established using a Sponsor-approved local laboratory, a tumor tissue specimen and/or blood sample is expected to be available for retrospective sequencing in the central laboratory selected by the Sponsor.</Text>
					<Text style={styles.Text}>4. Measurable disease, as per RECIST version 1.1.</Text>
					<Text style={styles.Text}>5. Eastern Cooperative Oncology Group (ECOG) performance status 0, 1, or 2 (Appendix 1 of Study Protocol).</Text>
					<Text style={styles.Text}>6. Adequate bone marrow and organ function demonstrated by: </Text>
						<Text style={styles.subListA} >a. Absolute neutrophil count ≥ 1,000/mm3 (≥ 1.0 × 109/L)</Text>
						<Text style={styles.subListA} >b. Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) ≤ 2.5 × Upper Limit of Normal (ULN), or ≤ 5.0 × ULN for patients with documented liver metastases.  Alkaline phosphatase levels ≤ 2.5 × ULN.  In the presence of extensive bone metastases, there is no upper limit for alkaline phosphatase.</Text>
						<Text style={styles.subListA} >c. Total bilirubin ≤ 1.5 × ULN or ≤ 3.0 × ULN for patients with Gilbert Syndrome or documented liver metastases.</Text>
					<Text style={styles.Text}>7. ≥ 18 years of age.</Text>
					<Text style={styles.Text}>8. Women of child-bearing potential (WOCBP) or men whose partner is a WOCBP agrees to use contraception while participating in this study, and for a period of 6 months following termination of study treatment.</Text>
					<Text style={styles.Text}>9. Completed informed consent process, including signing IRB/EC-approved informed consent form.</Text>
					<Text style={styles.Text}>10. Willing to comply with clinical trial instructions and requirements.</Text>

				</ScrollView>

			</View>
		)

	}
}

export default InclusionCriteria;