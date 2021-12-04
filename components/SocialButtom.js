import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimentions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SocialButtom = ({
    buttomTitle, btnType,
    color,
    backgroundColor,
    ...rest}
    ) => {
        let bgColor = backgroundColor;
    return (
        <TouchableOpacity 
        style={[styles.buttomContainer, {backgroundColor}]} 
        {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome style={styles.icon} name={btnType} size={22} color={color} />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttomText, {color:color}]}>{buttomTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttomContainer:{
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    iconWrapper:{
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        fontWeight: 'bold'
    },

    btnTxtWrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttomText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    } 
})


export default SocialButtom;

