import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/action'
const ComponentB = () => {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <View>
            <Text style={{ fontSize: 30 }}>B : {counter}</Text>
            <Button title="+" onPress={() => dispatch(increment())} />
            < Button title="-" onPress={() => dispatch(decrement())} />
        </View>
    )
}

export default ComponentB
