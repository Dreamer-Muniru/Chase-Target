import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimentions';


const FormButtom = ({buttomTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttomContainer}>
            <Text style={styles.buttomText}>{buttomTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttomContainer:{
        marginTop: 10,
        width: '100%',
        height: windowHeight /15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    buttomText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',

    }
})

export default FormButtom;

