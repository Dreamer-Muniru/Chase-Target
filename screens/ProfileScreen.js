import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile_wrapper}>
                <View style={styles.profile_image}>
                    <TouchableOpacity onPress={() => alert('Profile upload Feature Coming Soon!')}>
                        <Entypo name="camera" size={24} color="#000" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.user_name}>Muniru Dreamer</Text>
                <Text style={styles.user_email}>@muniru 
                    <TouchableOpacity>
                        <AntDesign name="edit" size={15} color="#000" />
                    </TouchableOpacity>
                </Text>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
       
    },
    icon:{
        marginTop: 70,
        marginLeft: 70
    },
    text:{
        fontSize: 20,
    
    },
    user_name:{
        textAlign: 'center',
        paddingTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    profile_image:{
        backgroundColor: '#00bfff',
        width: '25%',
        left: '38%',
        right: '40%',
        top: 10,
        height: 100,
        borderRadius: 300,
        borderWidth: 1,
        borderColor: '#fffaf0'

    },
    user_email:{
        textAlign: 'center',
        padding: 0,
        fontSize: 15,
        fontWeight: 'bold'
    }

    

})

export default ProfileScreen
