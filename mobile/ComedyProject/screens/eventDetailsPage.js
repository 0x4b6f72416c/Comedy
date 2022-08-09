import React, { useEffect,useRef } from "react";
import { render } from "react-dom";
import { SafeAreaView, 
        StyleSheet,View, 
        TouchableOpacity,
        Text,
        Animated } from "react-native";

export default function EventDetailsPage({navigation}){

    return(
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Home')
            }}>
                <View  style = {styles.justComon}>
                    <Text style={{color:'white'}}>You have to pay to unlock this content</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:'column',
            backgroundColor:'#1a1a1a' 
        },
        justComon:{
            paddingTop:'50%',
            justifyContent:"center",
            alignItems:"center"
        }
    }
)