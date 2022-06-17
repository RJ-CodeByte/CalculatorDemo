import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import React from 'react'
import Calculator from '../screens/Calculator/Calculator';

export default function Routes() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Calc" component={Calculator} />
        </Stack.Navigator>
    )
}