import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {connect} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';



const Stack = createStackNavigator()
const AuthStack = ({auth}) => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    
    useEffect(() =>{
       AsyncStorage.getItem('alreadyLaunched').then(value=>{
           if(value == null){
               AsyncStorage.setItem('alreadyLaunched', 'true');
               setIsFirstLaunch(true);
           }else{
               setIsFirstLaunch(false);
           }
       })
    },[]);
    if(isFirstLaunch ===null){
        return null;
    }else if(isFirstLaunch === true){
        return(
          
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
                </Stack.Navigator>
           
        )
    }else{
        return (
            <NavigationContainer>
                {
                auth.login ?
                    //Show home page
                <   AppStack />
                :

                    //show login, register page
                    <Stack.Navigator>
                    <Stack.Screen 
                        name="LoginForm" 
                        component={LoginForm} 
                        options={{header: () => null}}
                    />
                    <Stack.Screen 
                        name="RegisterForm" 
                        component={RegisterForm}
                        options={({navigation}) =>({
                            title: '',
                            headerStyle:{
                                backgroundColor: '#f9fafd',
                                shadowColor: '#f9fafd',
                                elevation: 0,
                            }
                        })}
                    />
                </Stack.Navigator>
                }

            </NavigationContainer>
        )
    }
  
}
const mapStateToProps = (state)=>{
    return {auth:state}
  }
export default connect(mapStateToProps) (AuthStack)
