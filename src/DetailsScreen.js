import React from "react";
import { Button, Text } from "react-native-paper";
import {View,StyleSheet} from 'react-native'
const DetailsScreen = ()=> {
    return (
        <View style = {style.container} >
            <Text>Details Screen</Text>
            
        </View>
    )
}

export default DetailsScreen;
const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
});