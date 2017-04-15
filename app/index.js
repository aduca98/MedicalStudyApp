'use strict'
// React dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, StatusBar, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CheckBox from 'react-native-checkbox';
 
// Style sheet
import mainStyle from './config/styles';

// Pages
import About from './routes/About/About';
import Contacts from './routes/Contacts/Contacts';
import ExclusionCriteria from './routes/ExclusionCriteria/ExclusionCriteria';
import InclusionCriteria from './routes/InclusionCriteria/InclusionCriteria';
import Protocol from './routes/Protocol/Protocol';
import RecruitmentMaterials from './routes/RecruitmentMaterials/RecruitmentMaterials';
import TermsOfUse from './routes/TermsOfUse/TermsOfUse';
import Privacy from './routes/TermsOfUse/Privacy';

// Components
import StylishButton from './components/Button/Button';

// Config
import images from './config/images';
const logo = images.logo;
const wave = images.wave;
import colors from './config/colors';
const purple = colors.purple;
const teal = colors.teal;
import { makeNavOptions } from './config/headerFxn';

class HomeScreen extends Component {

  // This is the title of the very top bar

  constructor(props) {
    super(props);
    this.state = {boolTerms: true}
  }

  static navigationOptions = makeNavOptions('Home');

  render() {

    const { navigate } = this.props.navigation;

    if(this.state.boolTerms) {

      return (

        <View style={mainStyle.container}>

          <Image style={mainStyle.logo} source={logo}/>

          <Image style={mainStyle.wave} source={wave}/>
          
          <View style={mainStyle.buttonsContainer}>

            <StylishButton
              title="Eligibility Criteria"
              onPress={() => navigate('InclusionCriteria')}
            />

            <StylishButton
              title="Protocol"
              onPress={() => navigate('Protocol')}
            />

            <StylishButton
              title="Contacts"
              onPress={() => navigate('Contacts')}
            />
           
            <StylishButton
              title="Terms of Use & Privacy Policy"
              onPress={() => navigate('TermsOfUse')}
            />

            

          </View>

        </View>
      );
    } else {
      return( 

        <View>

           <View style={mainStyle.buttonsContainer}>

            <CheckBox
              label='Agree to Terms and Conditions'
              checked={false}
              onChange={(checked) => { 
                  console.log('I am checked');
                  this.setState({boolTerms: true}) 
              }} 
              containerStyle={mainStyle.checkbox}
            />

            <Button
              title="Terms of Use & Privacy Policy"
              onPress={() => navigate('TermsOfUse')}
            />

           </View>

        </View>

      )
    }

  }
}

const AppNav = StackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: About },
  Contacts: { screen: Contacts },
  InclusionCriteria: { screen: InclusionCriteria },
  ExclusionCriteria: { screen: ExclusionCriteria },
  Protocol: { screen: Protocol },
  RecruitmentMaterials: { screen: RecruitmentMaterials },
  TermsOfUse: { screen: TermsOfUse },
  Privacy: { screen: Privacy },
});



export default AppNav;