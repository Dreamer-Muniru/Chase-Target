import React, { useState, useEffect } from 'react';
import { View, Text, Platform, TouchableOpacity, Button, Image } from 'react-native';
import { InputField, InputWrapper, AddImage } from '../styles/addPost';

import Icon from 'react-native-vector-icons/Ionicons';

const AddPost = () => {
    
    return (
   
        <View>
            <InputField 
            placeholder="What's on your mind?" 
            multiline
            numberOfLines={4}
         />
        
    </View>
    )
    
}








export default AddPost
