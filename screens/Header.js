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
            <HeaderTitle>Chase Target</HeaderTitle>
            <HeaderButton onPress={handleClearTodos} >
                <Entypo name="trash" size={25} color={colors.tertiary} />
            </HeaderButton>
        </HeaderView>
    )
}

export default Header
