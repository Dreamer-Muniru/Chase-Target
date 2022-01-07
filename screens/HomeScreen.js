import React, { useState, Component } from 'react';
import { View, Text, Image,
     ScrollView, StyleSheet, 
     TouchableOpacity } 
     from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import TransferMoney from '../screens/TransferMoney';
import {connect} from 'react-redux';

const HomeScreen = () => {
    return (
            <View style={styles.container}>
           <View>
                <Text style={styles.heading_text}>Set up a Target and start Saving now!</Text>
                {/* <Text style={{color: 'red', fontSize:30}}>
                    Name:{surname}
                </Text> */}
                
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.dream}>
                <MaterialIcons name="settings-system-daydream" style={{marginLeft:30}} size={120} color="white" />
                    <Text style={styles.goal_text}>Dream Big</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.goal} >
                <AntDesign name="pay-circle1" style={{marginLeft:20}} size={120} color="white" />
                    <Text style={styles.goal_text}>Set Goals</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.action}>
                    <Entypo name="man" size={120} style={{marginLeft:28}} color="white" />
                    <Text style={styles.action_text}>Take Action</Text>
                </TouchableOpacity>
            </ScrollView>

       </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 20,
        margin: 5
    },
    dream:{
        width: 200,
        height: 200,
        padding: 10,     
        margin: 10,
        backgroundColor: '#00bfff',
        borderRadius: 10,
        justifyContent: 'center',
    },

    goal:{
        width: 200,
        height: 200,
        paddingLeft: 20,       
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#00bfff',
        
        
    },

    action:{
        width: 200,
        height: 200,
        padding: 10,     
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#00bfff',
        
    },
    dream_text:{
        color: '#000',
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    
    },  
    goal_text:{
        color: '#fff',
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5
    },
    action_text:{
        color: '#fff',
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5
    },    
    heading_text:{
        justifyContent: 'center',
        textAlign: 'center',
        margin: 20,
        fontSize: 20,

    }
})

const mapStateToProps =(state) =>{
    return {
        auth:state,
    
    }
}
export default connect(mapStateToProps)(HomeScreen)
