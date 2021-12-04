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
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            
            {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/work3.png')} />,
            title: 'Feel free to Signup 2',
            subtitle: 'Done with React Native Onboarding Swiper',
           },
            {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/sleekjob.png')} />,
            title: 'You can also login here 3',
            subtitle: 'Done with React Native Onboarding Swiper',
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
