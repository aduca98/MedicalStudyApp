'use strict'

import React from 'react';
import { View, Text, ScrollView, Button, WebView } from 'react-native';
import { makeNavOptions } from '../../config/headerFxn';
import TextBody from '../../components/TextBody/TextBody';
import styles from './styles';

class TermsOfUse extends React.Component {

	static navigationOptions = makeNavOptions('Terms of Use');

	constructor() {
		super();
	
	}

	render() {

		const { navigate } = this.props.navigation;

		return(

			<ScrollView>

				<Button
					title="Privacy Policy"
					onPress={() => navigate('Privacy')}
				/>

				<Text style={styles.center}>Effective Date:  4/10/2017</Text>

				<Text style={styles.padding}>
					
				General Terms and Acceptance.  The terms and conditions of use set forth below (the “Terms of Use”) govern use of the Amethyst Application for mobile devices (the “Amethyst Application”).  The Amethyst Application is provided by Mirati Therapeutics, Inc. and its agents (“Mirati,” “us,” “our,” or “we”) for use in connection with Mirati’s Phase 2 clinical trial of Glesatinib (MGCD265) in NSCLC patients with MET genetic alterations (the “Amethyst Study”).  Before you can download and use the Amethyst Application, you must confirm your agreement, without limitation or qualification, to these Terms of Use by checking the box below indicating that you accept these Terms of Use.  If you do not accept these Terms of Use by checking the box below, you will not be able to download, nor will you be authorized to use, the Amethyst Application.  The provisions of Privacy Policy Statement below are part of these Terms of Use.
				 Mirati’s Right to Change the Amethyst Application and Terms of Use.  Mirati reserves the right to discontinue the Amethyst Application or to change the Amethyst Application and these Terms of Use at any time in our sole discretion.  If we discontinue the Amethyst Application, the Amethyst Application will no longer be available for use.  If we change the Amethyst Application, we will notify you of such changes by sending you an email containing a link to the updated version of the Amethyst Application.  If we revise these Terms of Use, you will have the opportunity to accept, or not, the revised Terms of Use.  If you accept the revised Terms of Use, the Amethyst Application, including any updates thereto, will be available for you to download and use.
				 Logging In to Amethyst Application; Limitation on Use of Amethyst Application.  If you are authorized to download and use the Amethyst Application, and have accepted these Terms of Use, Mirati will provide you with a user-name, password and/or other identifiers (your “Login Credentials”).  Mirati requires you to enter your Login Credentials in order to download, access and use the Amethyst Application, or to access other information provided through the Amethyst Application Web Page.  By accessing and using the Amethyst Application or the Amethyst Application Web Page, you agree to maintain your Login Credentials as confidential subject to the Confidential Provisions referenced below and not to share them with any other person.  You agree you will use the Amethyst Application, including the information and materials contained therein or made available to you thereby, solely in connection with the Amethyst Study and for no other purpose.  You agree you will cease using the Amethyst Application, and will uninstall it from your systems and device(s), including mobile devices, as soon as your participation in the Amethyst Study ends.  You further agree that, upon our request at any time, and at our sole discretion for any reason, you will cease using and uninstall the Amethyst Application from your systems and device(s), including mobile devices.
				 Use of and Rights Regarding Content of Amethyst Application.  All information, text, data, graphics, images, sound, trademarks, and other information displayed by or contained on the Amethyst Application and/or the Amethyst Application Web Page, including any materials made available thereby, (collectively, the “Mirati Content”), is either the property of, or is used with permission by, Mirati.  You should assume that all Mirati Content is copyrighted unless otherwise noted and may not be used in a manner inconsistent with these Terms of Use without our express written permission. You understand and agree that we retain all right, title and interest (including all copyrights, service marks, trademarks, trade secrets and other intellectual property rights) in all Mirati Content, whether in print, machine-readable, visual or audible form.  You may use the Amethyst Application and the Amethyst App Web Page, and download Mirati Content, solely for use in connection with the Amethyst Study and for no other purpose.  You may not reproduce, distribute or modify the Mirati Content. Except as expressly provided by these Terms of Use, no license or right is or is intended to be conveyed to you under any intellectual property or other right of Mirati or any third party, whether by implication, estoppel or otherwise. All rights not expressly granted herein are reserved.  Trademarks owned by Mirati include: “MIRATI”™,  “MIRATI THERAPEUTICS”™, “AMETHYST”™, “AMETHYST STUDY” ™, and our corporate logo.

				Access and Use of Mirati Confidential Information.  The Amethyst Application and Mirati Content is intended for download and use only by those persons who are clinical investigators or members of the clinical study team at sites that have contracted with Mirati to conduct the Amethyst study, employees of a clinical research organization contracted by Mirati to assist in the conduct the Amethyst study, certain other contracted consultants to Mirati, and employees of Mirati. As between you and Mirati, the Mirati Content is the confidential and proprietary information of Mirati.  You agree that your access to and use of the Amethyst Application, the Mirati Content, and your Login Credentials, are governed by the confidentiality provisions of the applicable agreement (e.g., clinical research agreement, clinical research organization services agreement, consulting agreement, etc.) between you and/or your employer (or other institution with which you are affiliated), on the one hand, and Mirati, on the other hand, pertaining to the Amethyst Study (herein, the “Confidentiality Provisions”).  By accepting these Terms of Use, you agree that you will abide by the Confidentiality Provisions, and that you will not share or use the Amethyst Application, or the Mirati Content, except subject to and in accordance with and as permitted by the Confidentiality Provisions.  In particular, the information contained in or displayed by the Amethyst Application may not be shared with anyone who is not subject to the Confidentiality Provisions, or any person with whom sharing such confidential information would not be permitted by the Confidentiality Provisions.
				 Process for Updates to the Amethyst Application; Notices.  From time to time Mirati may in its sole discretion update the Amethyst Application.  For example, if there is an amendment to the Amethyst Study protocol, including the eligibility criteria for the Amethyst Study, Mirati will update the Amethyst Application with the amended Amethyst Study protocol so that you may access the most recent version that has been approved by your Institutional Review Board.  It is therefore important that you make sure you are using the latest version of the Amethyst Application.  If Mirati updates the Amethyst Application, Mirati will send a notification to you indicating that a new version of the Amethyst Application is available for you to download.  Mirati intends to notify you that an updated version of the Amethyst Application is available for you to download as soon as practicable following Mirati’s receipt of notification that your Institutional Review Board (IRB) has approved any amendment to the Amethyst Study protocol.  However, you agree in any event that, in conducting any AMETHYST study activities, it is ALWAYS your responsibility to ensure that you adhere to the latest IRB-APPROVED version of the Amethyst sTUDY PROTOCOL, even if the version of the Amethyst application LOADED ONTO YOUR MOBILE DEVICE does not contain the latest IRB-approved version of the Amethyst Study protocol.     Investigational Product and Medical Information.  The drug product candidate (Glesatinib) referred to in the Amethyst Application or on the Amethyst Application Web Page, including in any materials provided thereby, is investigational, has not been approved by the U.S. Food and Drug Administration or any other regulatory agency, and is not available for sale. Nothing contained in the Amethyst Application or on the Amethyst Application Web Page constitutes or is intended as a promotion of any drug product candidate or recommendation for the use of any drug product candidate in a way contrary to applicable laws and regulations of the country in which you are located.  The Mirati Content, including any medical information provided through the Amethyst Application or on the Amethyst Application Web Page, is intended for use solely in conjunction with the Amethyst Study, and is not intended as a substitute for professional medical advice, diagnosis or treatment.
				 Links to Other Sites.  Mirati may provide links to other web sites for your convenience in locating useful information.  The Amethyst Study web site, http://www.theamethyststudy.com/, is under Mirati’s control.  The terms and conditions governing the use of the Amethyst Study web site are available on that site and you are responsible for understanding and complying with all of such terms and conditions if you choose to use that site.  Third party web sites to which we may provide links for your convenience are not under our control. Mirati makes no warranties or representations of any kind as to the accuracy, currency, or completeness of any information contained in such third-party websites and shall have no liability for any damage or injury of any kind arising from such content or information.  Inclusion of any third-party website link does not imply an endorsement or recommendation by Mirati of such third party website(s) or of any products and/or services provided by or advertised on such third-party web site(s). You are responsible for complying with all terms and conditions governing the use of linked web sites.
				 Disclaimers of Warranties; Other Disclaimers.  THE AMETHYST APPLICATION and the Amethyst AppLICATION Web Page (INCLUDING, WITHOUT LIMITATION, ALL MIRATI CONTENT, SOFTWARE, FUNCTIONS, MATERIALS AND INFORMATION MADE AVAILABLE THROUGH OR CONSTITUTING THE Amethyst APPLICATION and the Amethyst AppLICATION Web Page, OR ACCESSED BY MEANS THEREOF), TO THE GREATEST EXTENT PERMITTED BY LAW, IS PROVIDED "AS IS," WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY EXPRESS OR IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, COMPATIBILITY, SECURITY, ACCURACY, OR NON-INFRINGEMENT.  WITHOUT LIMITING THE FOREGOING, TO THE GREATEST EXTENT PERMITTED BY LAW, Mirati MAKES NO WARRANTY OR REPRESENTATION, EITHER EXPRESS OR IMPLIED, THAT: (i) ACCESS TO OR OPERATION OF THE Amethyst APPLICATION or the Amethyst AppLICATION Web Page WILL BE UNINTERRUPTED, TIMELY, OR ERROR FREE; (ii) THE Amethyst APPLICATION or the Amethyst AppLICATION Web Page WILL BE ACCURATE, UP-TO-DATE, OR RELIABLE; (iii) THE QUALITY OF THE Amethyst APPLICATION, the Amethyst AppLICATION Web Page, OR MIRATI CONTENT WILL MEET YOUR EXPECTATIONS; (iv) ANY ERRORS IN THE Amethyst APPLICATION, the Amethyst AppLICATION Web Page, OR MIRATI cONTENT WILL BE CORRECTED; OR (v) THE Amethyst APPLICATION, the Amethyst AppLICATION Web Page OR THE SERVERS THROUGH WHICH THEY ARE MADE AVAILABLE ARE FREE OF MALWARE OR OTHER HARMFUL ELECTRONIC COMPONENTS.  USE OF THE Amethyst APPLICATION and the Amethyst AppLICATION Web Page IS AT YOUR OWN RISK. YOU ASSUME FULL RESPONSIBILITY FOR ANY RISK OF LOSS RESULTING FROM YOUR USE AND/OR DOWNLOADING OF THE Amethyst APPLICATION, THE AMETHYST APPLICATION WEB PAGE OR ANY MIRATI CONTENT (INCLUDING, WITHOUT LIMITATION, ANY SOFTWARE).    yOU ACKNOWLEDGE AND AGREE THAT: (I) YOU, NOT MIRATI, SHALL BEAR FULL responsibility FOR TRANSMISSIONS THAT YOU MAKE OR RECEIVE VIA THE INTERNET, WIRELESS CONNECTIONS, OR COMPUTER NETWORKS, (II) YOU ARE AWARE OF AND ACCEPT ALL RISKS THAT TRANSMISSIONS MADE OR RECEIVED VIA THE INTERNET, WIRELESS CONNECTIONS, OR COMPUTER NETWORKS MAY NOT BE SECURE, AND (III) YOU HAVE CONSIDERD SUCH RISKS BEFORE TRANSMITTING, SUBMITTING OR DOWNLOADING ANY INFORMATION USING THE INTERNET, WIRELESS CONNECTIONS OR COMPUTER NETWORKS.  EXCEPT AS PROVIDED IN OUR PRIVACY POLICY STATEMENT BELOW, MIRATI MAKES NO REPRESENTATIONS, WARRANTIES OR COVENANTS REGARDING CONFIDENTIALITY OR PRIVACY OF ANY COMMUNICATION OR INFORMATION TRANSMITTED BY OR THROUGH THE AMETHYST APPLICATION, the Amethyst AppLICATION Web Page, ANY WEB SITE ACCESSED VIA THE Amethyst APPLICATION or the Amethyst AppLICATION Web Page.  YOU ACKNOWLEDGE AND AGREE THAT YOUR ACCESS TO OR USE OF THE Amethyst APPLICATION AND/or the Amethyst AppLICATION Web Page IS VOLUNTARY AND IS UNDERTAKEN AT YOUR SOLE RISK.  You acknowledge that any images displayed on the Amethyst Application or the Amethyst Application Web Page, including without limitation Mirati Content, depicting unnamed persons are for illustrative purposes only and such persons are models who do not personally use or endorse any business, product, service, cause or other endeavor of ours.
				 Limitations of Liability.  In the event of any problem with the Amethyst Application or the Amethyst Application Web Page, or any Mirati Content, you agree that your sole remedy is to cease using the Amethyst Application or the Amethyst Application Web Page. YOU AGREE THAT, TO THE GREATEST EXTENT PERMISSIBLE BY LAW, Mirati AND ITS AFFILIATES, LICENSORS AND ASSIGNS, or any party involved in creating or producing the Amethyst Application, the Amethyst Application Web Page, or any mirati content, AND EACH OF THEIR RESPECTIVE EMPLOYEES, OFFICERS AND DIRECTORS (COLLECTIVELY, THE “RELEASED PARTIES”) WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR DAMAGES OF ANY KIND, WHETHER BASED IN TORT, CONTRACT, STRICT LIABILITY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, OR PUNITIVE DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA (EVEN IF Mirati IS AWARE OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) ARISING OUT OF OR RESULTING IN ANY WAY FROM: (i) YOUR USE OF the Amethyst Application OR the Amethyst AppLICATION Web Page; (ii) THE UNAVAILABILITY OF the Amethyst Application OR the Amethyst AppLICATION Web Page OR INTERRUPTIONS IN THE AVAILABILITY OF the Amethyst Application OR the Amethyst AppLICATION Web Page; (iii) ANY ERRORS OR OMISSIONS IN THE OPERATION OF the Amethyst Application, the Amethyst AppLICATION Web Page, OR THE MIRATI CONTENT; (iv) THE ACTIONS OF OTHER USERS OF the Amethyst Application OR the Amethyst AppLICATION Web Page, OR OF ANY THIRD PARTY; OR (v) THE UNINTENTIONAL DISCLOSURE OF INFORMATION STORED ON OR TRANSMITTED THROUGH the Amethyst Application OR the Amethyst AppLICATION Web Page, TRANSMITTED OVER NETWORKS ACCESSED BY the Amethyst Application OR the Amethyst AppLICATION Web Page, OR OTHERWISE CONNECTED WITH YOUR USE OF the Amethyst Application OR the Amethyst AppLICATION Web Page, EVEN IF IT CONSTITUTES CONFIDENTIAL OR TRADE SECRET INFORMATION (THE “RELEASED MATTERS”).  RESTRICTIONS ON THE DISCLAIMERS OF WARRANTIES AND LIMITATIONS OF LIABILITY.  SOME JURISDICTIONS DO NOT BY LAW ENFORCE OR ALLOW FOR THE DISCLAIMER OF CERTAIN WARRANTIES OR THE LIMITATION OF CERTAIN LIABILITIES.  ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS OF WARRANTY OR LIMITATIONS OF LIABILTY MAY NOT APPLY TO YOU.  HOWEVER, YOU AGREE THAT THE DISCLAIMERS OF WARRANTIES, OTHER DISCLAIMERS, AND LIMITATIONS OF LIABILITY SET FORTH HEREIN WILL BE ENFORCED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.  Use Outside the United States; Non-United States Residents.  Mirati operates the Amethyst Application and the Amethyst Application Web Page in the United States and the Amethyst Application and the Amethyst Application Web Page are not intended for use in countries other than the United States.  Mirati does not represent, warrant or covenant that the Amethyst Application or the Amethyst Application Web Page will operate or function in accordance with, or comply with, the laws and regulations of jurisdictions other than the United States.  If you access the Amethyst Application or the Amethyst Application Web Page from locations outside of the United States you do so on your own initiative and at your own risk.  When using the internet, wireless connections, or computer networks, or any websites, applications, or information accessible thereon, from countries or jurisdictions other than the United States, you are solely responsible for compliance with the laws, rules, and regulations of such countries and jurisdictions.  You may not access the Amethyst Application from any country or territory where the content or use of the Amethyst Application or the Amethyst Application Web Page is illegal.  You may not use or export any of the Mirati Content in violation of United States export laws and regulations.
				
				</Text>

			</ScrollView>

		)

	}
}

export default TermsOfUse;

/* 
<Text style={styles.padding}> {p1} </Text>
					<Text style={styles.padding}> {p2} </Text>
					<Text style={styles.padding}> {p3} </Text>
					<Text style={styles.padding}> {p4} </Text>
					<Text style={styles.padding}> {p5} </Text>
					<Text style={styles.padding}> {p6} </Text>
					<Text style={styles.padding}> {p7} </Text>
					<Text style={styles.padding}> {p8} </Text>
					<Text style={styles.padding}> {p9} </Text>
					<Text style={styles.padding}> {p10} </Text>
					<Text style={styles.padding}> {p11} </Text>
					<Text style={styles.padding}> {p12} </Text>


						<Text style={styles.bold}>General Terms and Acceptance. </Text>
						<Text>The terms and conditions of use set forth below (the “Terms of Use”) govern use of the Amethyst Application for mobile devices (the “Amethyst Application”).  The Amethyst Application is provided by Mirati Therapeutics, Inc. and its agents (“Mirati,” “us,” “our,” or “we”) for use in connection with Mirati’s Phase 2 clinical trial of Glesatinib (MGCD265) in NSCLC patients with MET genetic alterations (the “Amethyst Study”).  Before you can download and use the Amethyst Application, you must confirm your agreement, without limitation or qualification, to these Terms of Use by checking the box below indicating that you accept these Terms of Use.  If you do not accept these Terms of Use by checking the box below, you will not be able to download, nor will you be authorized to use, the Amethyst Application.  The provisions of Privacy Policy Statement below are part of these Terms of Use.</Text>
						 <Text style={styles.bold}>Mirati’s Right to Change the Amethyst Application and Terms of Use.</Text>
						<Text>Mirati reserves the right to discontinue the Amethyst Application or to change the Amethyst Application and these Terms of Use at any time in our sole discretion.  If we discontinue the Amethyst Application, the Amethyst Application will no longer be available for use.  If we change the Amethyst Application, we will notify you of such changes by sending you an email containing a link to the updated version of the Amethyst Application.  If we revise these Terms of Use, you will have the opportunity to accept, or not, the revised Terms of Use.  If you accept the revised Terms of Use, the Amethyst Application, including any updates thereto, will be available for you to download and use.</Text>
						 <Text style={styles.bold}>Logging In to Amethyst Application; Limitation on Use of Amethyst Application.</Text>
						<Text>If you are authorized to download and use the Amethyst Application, and have accepted these Terms of Use, Mirati will provide you with a user-name, password and/or other identifiers (your “Login Credentials”).  Mirati requires you to enter your Login Credentials in order to download, access and use the Amethyst Application, or to access other information provided through the Amethyst Application Web Page.  By accessing and using the Amethyst Application or the Amethyst Application Web Page, you agree to maintain your Login Credentials as confidential subject to the Confidential Provisions referenced below and not to share them with any other person.  You agree you will use the Amethyst Application, including the information and materials contained therein or made available to you thereby, solely in connection with the Amethyst Study and for no other purpose.  You agree you will cease using the Amethyst Application, and will uninstall it from your systems and device(s), including mobile devices, as soon as your participation in the Amethyst Study ends.  You further agree that, upon our request at any time, and at our sole discretion for any reason, you will cease using and uninstall the Amethyst Application from your systems and device(s), including mobile devices.</Text>
						 <Text style={styles.bold}>Use of and Rights Regarding Content of Amethyst Application.  All information, text, data, graphics, images, sound, trademarks, and other information displayed by or contained on the Amethyst Application and/or the Amethyst Application Web Page, including any materials made available thereby, (collectively, the “Mirati Content”), is either the property of, or is used with permission by, Mirati.  You should assume that all Mirati Content is copyrighted unless otherwise noted and may not be used in a manner inconsistent with these Terms of Use without our express written permission. You understand and agree that we retain all right, title and interest (including all copyrights, service marks, trademarks, trade secrets and other intellectual property rights) in all Mirati Content, whether in print, machine-readable, visual or audible form.  You may use the Amethyst Application and the Amethyst App Web Page, and download Mirati Content, solely for use in connection with the Amethyst Study and for no other purpose.  You may not reproduce, distribute or modify the Mirati Content. Except as expressly provided by these Terms of Use, no license or right is or is intended to be conveyed to you under any intellectual property or other right of Mirati or any third party, whether by implication, estoppel or otherwise. All rights not expressly granted herein are reserved.  Trademarks owned by Mirati include: “MIRATI”™,  “MIRATI THERAPEUTICS”™, “AMETHYST”™, “AMETHYST STUDY” ™, and our corporate logo.</Text>
					
						<Text style={styles.bold}>Access and Use of Mirati Confidential Information.  </Text>
						<Text>The Amethyst Application and Mirati Content is intended for download and use only by those persons who are clinical investigators or members of the clinical study team at sites that have contracted with Mirati to conduct the Amethyst study, employees of a clinical research organization contracted by Mirati to assist in the conduct the Amethyst study, certain other contracted consultants to Mirati, and employees of Mirati. As between you and Mirati, the Mirati Content is the confidential and proprietary information of Mirati.  You agree that your access to and use of the Amethyst Application, the Mirati Content, and your Login Credentials, are governed by the confidentiality provisions of the applicable agreement (e.g., clinical research agreement, clinical research organization services agreement, consulting agreement, etc.) between you and/or your employer (or other institution with which you are affiliated), on the one hand, and Mirati, on the other hand, pertaining to the Amethyst Study (herein, the “Confidentiality Provisions”).  By accepting these Terms of Use, you agree that you will abide by the Confidentiality Provisions, and that you will not share or use the Amethyst Application, or the Mirati Content, except subject to and in accordance with and as permitted by the Confidentiality Provisions.  In particular, the information contained in or displayed by the Amethyst Application may not be shared with anyone who is not subject to the Confidentiality Provisions, or any person with whom sharing such confidential information would not be permitted by the Confidentiality Provisions.</Text>
						 <Text style={styles.bold}>Process for Updates to the Amethyst Application; Notices.  </Text>
						<Text>From time to time Mirati may in its sole discretion update the Amethyst Application.  For example, if there is an amendment to the Amethyst Study protocol, including the eligibility criteria for the Amethyst Study, Mirati will update the Amethyst Application with the amended Amethyst Study protocol so that you may access the most recent version that has been approved by your Institutional Review Board.  It is therefore important that you make sure you are using the latest version of the Amethyst Application.  If Mirati updates the Amethyst Application, Mirati will send a notification to you indicating that a new version of the Amethyst Application is available for you to download.  Mirati intends to notify you that an updated version of the Amethyst Application is available for you to download as soon as practicable following Mirati’s receipt of notification that your Institutional Review Board (IRB) has approved any amendment to the Amethyst Study protocol.  However, you agree in any event that, in conducting any AMETHYST study activities, it is ALWAYS your responsibility to ensure that you adhere to the latest IRB-APPROVED version of the Amethyst sTUDY PROTOCOL, even if the version of the Amethyst application LOADED ONTO YOUR MOBILE DEVICE does not contain the latest IRB-approved version of the Amethyst Study protocol.     Investigational Product and Medical Information.  The drug product candidate (Glesatinib) referred to in the Amethyst Application or on the Amethyst Application Web Page, including in any materials provided thereby, is investigational, has not been approved by the U.S. Food and Drug Administration or any other regulatory agency, and is not available for sale. Nothing contained in the Amethyst Application or on the Amethyst Application Web Page constitutes or is intended as a promotion of any drug product candidate or recommendation for the use of any drug product candidate in a way contrary to applicable laws and regulations of the country in which you are located.  The Mirati Content, including any medical information provided through the Amethyst Application or on the Amethyst Application Web Page, is intended for use solely in conjunction with the Amethyst Study, and is not intended as a substitute for professional medical advice, diagnosis or treatment.</Text>
						 <Text style={styles.bold}>Links to Other Sites. </Text>
						<Text>Mirati may provide links to other web sites for your convenience in locating useful information.  The Amethyst Study web site, http://www.theamethyststudy.com/, is under Mirati’s control.  The terms and conditions governing the use of the Amethyst Study web site are available on that site and you are responsible for understanding and complying with all of such terms and conditions if you choose to use that site.  Third party web sites to which we may provide links for your convenience are not under our control. Mirati makes no warranties or representations of any kind as to the accuracy, currency, or completeness of any information contained in such third-party websites and shall have no liability for any damage or injury of any kind arising from such content or information.  Inclusion of any third-party website link does not imply an endorsement or recommendation by Mirati of such third party website(s) or of any products and/or services provided by or advertised on such third-party web site(s). You are responsible for complying with all terms and conditions governing the use of linked web sites.</Text>
						 <Text style={styles.bold}>Disclaimers of Warranties; Other Disclaimers.  </Text>
						<Text>THE AMETHYST APPLICATION and the Amethyst AppLICATION Web Page (INCLUDING, WITHOUT LIMITATION, ALL MIRATI CONTENT, SOFTWARE, FUNCTIONS, MATERIALS AND INFORMATION MADE AVAILABLE THROUGH OR CONSTITUTING THE Amethyst APPLICATION and the Amethyst AppLICATION Web Page, OR ACCESSED BY MEANS THEREOF), TO THE GREATEST EXTENT PERMITTED BY LAW, IS PROVIDED "AS IS," WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY EXPRESS OR IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, COMPATIBILITY, SECURITY, ACCURACY, OR NON-INFRINGEMENT.  WITHOUT LIMITING THE FOREGOING, TO THE GREATEST EXTENT PERMITTED BY LAW, Mirati MAKES NO WARRANTY OR REPRESENTATION, EITHER EXPRESS OR IMPLIED, THAT: (i) ACCESS TO OR OPERATION OF THE Amethyst APPLICATION or the Amethyst AppLICATION Web Page WILL BE UNINTERRUPTED, TIMELY, OR ERROR FREE; (ii) THE Amethyst APPLICATION or the Amethyst AppLICATION Web Page WILL BE ACCURATE, UP-TO-DATE, OR RELIABLE; (iii) THE QUALITY OF THE Amethyst APPLICATION, the Amethyst AppLICATION Web Page, OR MIRATI CONTENT WILL MEET YOUR EXPECTATIONS; (iv) ANY ERRORS IN THE Amethyst APPLICATION, the Amethyst AppLICATION Web Page, OR MIRATI cONTENT WILL BE CORRECTED; OR (v) THE Amethyst APPLICATION, the Amethyst AppLICATION Web Page OR THE SERVERS THROUGH WHICH THEY ARE MADE AVAILABLE ARE FREE OF MALWARE OR OTHER HARMFUL ELECTRONIC COMPONENTS.  USE OF THE Amethyst APPLICATION and the Amethyst AppLICATION Web Page IS AT YOUR OWN RISK. YOU ASSUME FULL RESPONSIBILITY FOR ANY RISK OF LOSS RESULTING FROM YOUR USE AND/OR DOWNLOADING OF THE Amethyst APPLICATION, THE AMETHYST APPLICATION WEB PAGE OR ANY MIRATI CONTENT (INCLUDING, WITHOUT LIMITATION, ANY SOFTWARE).    yOU ACKNOWLEDGE AND AGREE THAT: (I) YOU, NOT MIRATI, SHALL BEAR FULL responsibility FOR TRANSMISSIONS THAT YOU MAKE OR RECEIVE VIA THE INTERNET, WIRELESS CONNECTIONS, OR COMPUTER NETWORKS, (II) YOU ARE AWARE OF AND ACCEPT ALL RISKS THAT TRANSMISSIONS MADE OR RECEIVED VIA THE INTERNET, WIRELESS CONNECTIONS, OR COMPUTER NETWORKS MAY NOT BE SECURE, AND (III) YOU HAVE CONSIDERD SUCH RISKS BEFORE TRANSMITTING, SUBMITTING OR DOWNLOADING ANY INFORMATION USING THE INTERNET, WIRELESS CONNECTIONS OR COMPUTER NETWORKS.  EXCEPT AS PROVIDED IN OUR PRIVACY POLICY STATEMENT BELOW, MIRATI MAKES NO REPRESENTATIONS, WARRANTIES OR COVENANTS REGARDING CONFIDENTIALITY OR PRIVACY OF ANY COMMUNICATION OR INFORMATION TRANSMITTED BY OR THROUGH THE AMETHYST APPLICATION, the Amethyst AppLICATION Web Page, ANY WEB SITE ACCESSED VIA THE Amethyst APPLICATION or the Amethyst AppLICATION Web Page.  YOU ACKNOWLEDGE AND AGREE THAT YOUR ACCESS TO OR USE OF THE Amethyst APPLICATION AND/or the Amethyst AppLICATION Web Page IS VOLUNTARY AND IS UNDERTAKEN AT YOUR SOLE RISK.  You acknowledge that any images displayed on the Amethyst Application or the Amethyst Application Web Page, including without limitation Mirati Content, depicting unnamed persons are for illustrative purposes only and such persons are models who do not personally use or endorse any business, product, service, cause or other endeavor of ours.</Text>
						 <Text>Limitations of Liability.  In the event of any problem with the Amethyst Application or the Amethyst Application Web Page, or any Mirati Content, you agree that your sole remedy is to cease using the Amethyst Application or the Amethyst Application Web Page. YOU AGREE THAT, TO THE GREATEST EXTENT PERMISSIBLE BY LAW, Mirati AND ITS AFFILIATES, LICENSORS AND ASSIGNS, or any party involved in creating or producing the Amethyst Application, the Amethyst Application Web Page, or any mirati content, AND EACH OF THEIR RESPECTIVE EMPLOYEES, OFFICERS AND DIRECTORS (COLLECTIVELY, THE “RELEASED PARTIES”) WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR DAMAGES OF ANY KIND, WHETHER BASED IN TORT, CONTRACT, STRICT LIABILITY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, OR PUNITIVE DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA (EVEN IF Mirati IS AWARE OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) ARISING OUT OF OR RESULTING IN ANY WAY FROM: (i) YOUR USE OF the Amethyst Application OR the Amethyst AppLICATION Web Page; (ii) THE UNAVAILABILITY OF the Amethyst Application OR the Amethyst AppLICATION Web Page OR INTERRUPTIONS IN THE AVAILABILITY OF the Amethyst Application OR the Amethyst AppLICATION Web Page; (iii) ANY ERRORS OR OMISSIONS IN THE OPERATION OF the Amethyst Application, the Amethyst AppLICATION Web Page, OR THE MIRATI CONTENT; (iv) THE ACTIONS OF OTHER USERS OF the Amethyst Application OR the Amethyst AppLICATION Web Page, OR OF ANY THIRD PARTY; OR (v) THE UNINTENTIONAL DISCLOSURE OF INFORMATION STORED ON OR TRANSMITTED THROUGH the Amethyst Application OR the Amethyst AppLICATION Web Page, TRANSMITTED OVER NETWORKS ACCESSED BY the Amethyst Application OR the Amethyst AppLICATION Web Page, OR OTHERWISE CONNECTED WITH YOUR USE OF the Amethyst Application OR the Amethyst AppLICATION Web Page, EVEN IF IT CONSTITUTES CONFIDENTIAL OR TRADE SECRET INFORMATION (THE “RELEASED MATTERS”).  RESTRICTIONS ON THE DISCLAIMERS OF WARRANTIES AND LIMITATIONS OF LIABILITY.  SOME JURISDICTIONS DO NOT BY LAW ENFORCE OR ALLOW FOR THE DISCLAIMER OF CERTAIN WARRANTIES OR THE LIMITATION OF CERTAIN LIABILITIES.  ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS OF WARRANTY OR LIMITATIONS OF LIABILTY MAY NOT APPLY TO YOU.  HOWEVER, YOU AGREE THAT THE DISCLAIMERS OF WARRANTIES, OTHER DISCLAIMERS, AND LIMITATIONS OF LIABILITY SET FORTH HEREIN WILL BE ENFORCED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.  Use Outside the United States; Non-United States Residents.  Mirati operates the Amethyst Application and the Amethyst Application Web Page in the United States and the Amethyst Application and the Amethyst Application Web Page are not intended for use in countries other than the United States.  Mirati does not represent, warrant or covenant that the Amethyst Application or the Amethyst Application Web Page will operate or function in accordance with, or comply with, the laws and regulations of jurisdictions other than the United States.  If you access the Amethyst Application or the Amethyst Application Web Page from locations outside of the United States you do so on your own initiative and at your own risk.  When using the internet, wireless connections, or computer networks, or any websites, applications, or information accessible thereon, from countries or jurisdictions other than the United States, you are solely responsible for compliance with the laws, rules, and regulations of such countries and jurisdictions.  You may not access the Amethyst Application from any country or territory where the content or use of the Amethyst Application or the Amethyst Application Web Page is illegal.  You may not use or export any of the Mirati Content in violation of United States export laws and regulations.</Text>
						
						*/