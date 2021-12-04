import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Chat Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text:{
        fontSize: 20,
        color: '#333333'
    }
})


export default ChatScreen
