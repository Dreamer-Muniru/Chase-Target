import React, {useState, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import SocialButtom from '../components/SocialButtom';
import {connect} from 'react-redux';
import {createEmailAccount, registerError} from '../redux/actions/authActions';
import {windowHeight, windowWidth} from '../utils/dimentions';


class RegisterForm extends Component {
    constructor(props){
        super(props)
        this.state={
          email: "",
          password: "",
          confirm: ""
        }
      }

      handleUpdateState =(name, value) =>{
          this.setState({
              [name]: value,
         
          })
      }
      handleOnSubmit = () =>{
        if(this.state.password !== this.state.confirm){
          this.props.registerError("Passwords do not match")
          return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
      }
    render() {
        const {navigation, auth} = this.props
        // const [email, setEmail] = useState();
        // const [password, setPassword] = useState();
        // const [confirmPassword, setconfirmPassword] = useState();
        return (

            <View style={styles.container}>
                <Text style={styles.text}>GovProp</Text>
                <Text style={styles.text}>Create an Account</Text>
                {/* Form Validation */}
                {
                      auth.error.register &&
                      <Text style={{color: 'red'}}>
                      {auth.error.register}
                      </Text>
                    }
                {/* Email Field*/}
                <FormInput
                    // lableValue={email} 
                    value={this.state.email}
                    onChangeText={(text) => 
                        {this.handleUpdateState('email', text)
                    }}
                    placeholderText='Email'
                    iconType='user'
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    
                />

                {/* Password Field*/}
                <FormInput 
                    // lableValue={password}
                    value={this.state.password}
                    onChangeText={(text) => 
                        {this.handleUpdateState('password', text)
                    }}
                    placeholderText='Password'
                    iconType='lock'
                    secureTextEntry={true}
                />

                <FormInput 
                    // lableValue={confirmPassword}
                    value={this.state.confirm}
                    onChangeText={(text) => 
                        {this.handleUpdateState('confirm', text)
                    }}
                    placeholderText='Confirm Password'
                    iconType='lock'
                    secureTextEntry={true}
                />

                <View>
                    <TouchableOpacity onPress={this.handleOnSubmit}
                         style={styles.buttomContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
          
            
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                    <TouchableOpacity onPress={() => alert('Term of Service Clicked!')}>
                        <Text style={[styles.color_textPrivate], {color: '#e88832'}}>Terms of service</Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <TouchableOpacity onPress={() => alert('Privacy Policy Clicked!')}>
                    <Text style={[styles.color_textPrivate], {color: '#e88832'}}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>

                {/* Social Icons */}
                <SocialButtom 
                    buttomTitle="Sign Up with Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => {}}
                />

                <SocialButtom 
                    buttomTitle="Sign Up with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => {}}
                />

                {/* Don't have An Account */}
            <TouchableOpacity 
                    style={styles.navButton} 
                    onPress={() =>
                    navigation.navigate('LoginForm')}
                >
                <Text style={styles.navButtonText}>Have an Account? Sign In</Text>
            </TouchableOpacity>
                
            </View>
        )
    }
}

            
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },

      text:{
          fontSize: 28,
          marginBottom: 10,
          color: '#051d5f'
      },
      navButton:{
          marginTop: 15,
      },
      
      navButtonText:{
          fontSize: 18,
          fontWeight: '500',
          color: '#000',
      },
      textPrivate:{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 35,
          justifyContent: 'center'
      },
      color_textPrivate:{
          fontSize: 13,
          fontWeight: '400',
          color: 'grey'
      },

      //   Button styling
    buttomContainer:{
        marginTop: 10,
        width: 300,
        height: windowHeight /15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    buttomText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',

    }

})

const mapStateToProps =(state) =>{
    return {auth:state}
}
export default connect(mapStateToProps, {createEmailAccount, registerError}) (RegisterForm);

