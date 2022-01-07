import React from 'react';
import { View, Text } from 'react-native';

import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
     } from '../styles/AppStyles';
import {Entypo} from "@expo/vector-icons";

const Header = ({handleClearTodos}) => {
    return (
        <HeaderView>
            <HeaderTitle style={{marginLeft: 0, marginTop: -30}}>All Targets</HeaderTitle>
            
        </HeaderView>
    )
}

export default Header
