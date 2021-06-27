import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector } from 'react-redux';
const ComponentA = () => {
    const counter = useSelector(state => state)

    return (
        <View>
            <Text style={{ fontSize: 30 }}>A : {counter}</Text>

        </View>
    )
}

export default ComponentA
