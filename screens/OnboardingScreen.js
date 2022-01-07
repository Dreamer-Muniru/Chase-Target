import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) =>(
    <Button
        title="Skip"
        {...props}
    />
)

const Next = ({...props}) =>(
    <Button
        title="Next"
        {...props}
    />
)
const Done = ({...props}) =>(
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        
        <Text style={{fontSize: 16}}>Done</Text>
    </TouchableOpacity>
)
const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={()=>{navigation.replace("LoginForm")}}
        onDone={()=>{navigation.navigate("LoginForm")}}
        pages={[
            {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/work4.png')} />,
            title: 'Case Target',
            subtitle: 'Welcome to Chase Tag. Set and save toward your target',
            },
            
            {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/work3.png')} />,
            title: 'Save for Future',
            subtitle: 'Remember your destiny is in your own hands.',
           },
            {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/sleekjob.png')} />,
            title: 'Create an Account',
            subtitle: 'Create an account for free and start saving now!',
           },
  ]}
/>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
export default OnboardingScreen
