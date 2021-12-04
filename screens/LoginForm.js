import React, { useState, Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        Image, 
        TouchableOpacity } 
        from 'react-native';
        
import FormInput from '../components/FormInput'
import SocialButtom from '../components/SocialButtom'
import {connect} from 'react-redux';
import {loginEmailAccount, loginError} from '../redux/actions/authActions'
import {windowHeight, windowWidth} from '../utils/dimentions';


class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state={
          email: "",
          password: "",
     
        }
      }
      handleUpdateState =(name, value) =>{
        this.setState({
            [name]: value,
       
        })
    }
    handleOnSubmit = () =>{
   
      this.props.loginEmailAccount(this.state.email, this.state.password)
    }
    render() {
        const {navigation, auth} = this.props
        return (
            <View style={styles.container}>
            <Image source={require('../assets/work3.png')}
                style={styles.logo}
            />
             {/* Form Validation */}
             {
                auth.error.login &&
                <Text style={{color: 'red'}}>
                {auth.error.login}
                </Text>
            }
            <Text style={styles.text}>GovProp</Text>
            {/* Email Field*/}
            <FormInput
                onChangeText={(text)=>
                {this.handleUpdateState('email', text)}}
                value={this.state.email} 
                placeholderText='Email'
                iconType='user'
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
            />

            {/* Password Field*/}
            <FormInput
                value={this.state.password}
                onChangeText={(text) => 
                    {this.handleUpdateState('password', text)
                }} 
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
            />

                <View>
                    <TouchableOpacity onPress={this.handleOnSubmit}
                         style={styles.buttomContainer}>
                    <Text style={styles.buttonText}>Log In</Text>
                    
                    </TouchableOpacity>
                </View>
            {/* Forgot Password */}
           <TouchableOpacity 
                style={styles.forgotButtom} 
                onPress={()=>{}}>
               <Text style={styles.navButtonText}>
                    Forgot Password
                </Text>
           </TouchableOpacity>


            {/* Social Icons */}
            <SocialButtom 
                buttomTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButtom 
                buttomTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            {/* Don't have An Account */}
           <TouchableOpacity 
                style={styles.forgotButtom} 
                onPress={() =>
                navigation.navigate('RegisterForm')}
            >
               <Text style={styles.navButtonText}>Don't have An Account? Create Here</Text>
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

      logo:{
          height: 150,
          width: 150,
          resizeMode: 'cover',
      },
      text:{
          fontSize: 28,
          marginBottom: 10,
          color: '#051d5f'
      },
      navButton:{
          marginTop: 15,
      },
      forgotButtom:{
          marginVertical: 35,
      },
      navButtonText:{
          fontSize: 18,
          fontWeight: '500',
          color: '#000',
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
export default connect(mapStateToProps, {loginEmailAccount, loginError}) (LoginForm);
