'use strict'

import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { makeNavOptions, makeNavOptionsWithRight } from '../../config/headerFxn';
import styles from './styles';

class ExclusionCriteria extends React.Component {

	constructor(props) {
		super(props)
		
	}

	static navigationOptions = makeNavOptions('Exclusion Criteria')

	render() {

		return(
			<View>
				
				<ScrollView style={styles.padding}>

					<Text style={styles.Text} >1. Prior treatment with a small molecule or antibody inhibitor of MET or HGF.</Text>
					<Text style={styles.Text}>2. Prior positive test for EGFR mutation or ALK gene rearrangement </Text>
						<Text style={styles.subListA} >a. Testing and documentation is required for patients with adenocarcinoma histology;</Text>
						<Text style={styles.subListA} >b. Testing is not required for patients with non-adenocarcinoma histology; however if documentation of a positive test is available, the patient will not be eligible.</Text>
					<Text style={styles.Text}>3. Most recent prior systemic therapy (e.g. chemotherapy or immunotherapy) or investigational agent discontinued ≤ 2 weeks before first dose date.</Text>
					<Text style={styles.Text}>4. Absence of recovery from the adverse effects of prior therapy at the time of enrollment to ≤ Grade 2 (excluding alopecia).History of stroke or transient ischemic attack within the previous 6 months.</Text>
					<Text style={styles.Text}>5. History of stroke or transient ischemic attack within the previous 6 months.</Text>
					<Text style={styles.Text}>6. Any of the following cardiac abnormalities: </Text>
						<Text style={styles.subListA} >a.  Unstable angina pectoris,</Text>
						<Text style={styles.subListA} >b. Congestive heart failure ≥ NYHA Class 3, or</Text>
						<Text style={styles.subListA} >b. Congestive heart failure ≥ NYHA Class 3, or</Text>
					<Text style={styles.Text}>7. Known or suspected presence of another malignancy that could be mistaken for metastatic NSCLC during disease assessments.</Text>
					<Text style={styles.Text}>8. Symptomatic or uncontrolled brain metastases requiring current treatment (less than 4 weeks from last cranial radiation, 2 weeks from stereotactic radiosurgery [gamma knife], or 2 weeks from last steroids).  Known conditions associated with significant risk of intracranial bleeding including but not limited to vascular malformations and pituitary adenoma.</Text>
					<Text style={styles.Text}>9. Inability to swallow oral medications or pre-existing gastrointestinal disorders that might interfere with proper absorption of oral drugs.</Text>
					<Text style={styles.Text}>10. Known hypersensitivity to any of the components of the MGCD265 Drug Product.</Text>
					<Text style={styles.Text}>11. Pregnancy.  WOCBP must have a negative serum or urine pregnancy test documented within the screening period prior start of study drug.</Text>
					<Text style={styles.Text}>12. Breast-feeding or planning to breast feed during the study or within 6 months after study treatment.</Text>
					<Text style={styles.Text}>13. Any serious illness, uncontrolled inter-current illness, active or uncontrolled infection, or other medical history, including laboratory results, which, in the Investigator’s opinion, would be likely to interfere with the patient’s participation in the study, or with the interpretation of the results.</Text>

				</ScrollView>

			</View>
		)

	}
}

export default ExclusionCriteria;