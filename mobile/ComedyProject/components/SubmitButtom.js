import React from "react";
import { StyleSheet,Text,View,TouchableOpacity } from "react-native";

export default function SubmitButtom(props){
    return(
        <TouchableOpacity onPress={props}>
            <View style={styles.buttom}>
                <Text style={styles.buttomText}>Поехали</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttom:{

        borderRadius:7,
        backgroundColor:'#666666',
        marginTop:30,
        height:25,
        width:200,
        alignSelf:'center'

    },
    buttomText:{
        color:'#1a1a1a',
        textTransform:'uppercase',
        fontWeight:"bold",
        fontSize:15,
        textAlign:'center'
    }
})