import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image } from 'react-native';



const Dipslay = (prop) => {

    console.log(prop)
    if (prop.datapass == "loading") {
        return <Text> data is loading </Text>

    }
    else {
        return (

            <View>
          
                <Text> {prop.datapass} </Text>
                
            </View>
        )
    }

}

export default Dipslay