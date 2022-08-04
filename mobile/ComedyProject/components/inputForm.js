import React from "react";
import { Formik } from "formik";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Animated} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import  * as yup from 'yup'

const singUpSchema = yup.object({
      userName: yup.string().required().min(4),
      phoneNumber : yup.number().positive().integer().min(11).required()
})

function _wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

export default function InputForm(){
    
    const [borderColor,  setColor ] = useState('#666666')
    const [borderColor1, setColor1] = useState('#666666')
    const [btnColor, setBtnColor] = useState('#666666')
    const navigation = useNavigation()
    return(
        <View>
            <Formik
                initialValues={{userName:'',phoneNumber:''}}
                validationSchema={singUpSchema }
                onSubmit={(values)=>{

                    setBtnColor('#8b00ff')
                    _wait(1000)
                    console.log(values)
                    navigation.navigate('Home')
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput 
                            style={[globalStyles.input,{borderColor:borderColor}]} 
                            placeholder='Имя Фамилия' 
                            placeholderTextColor={'#666666'}
                            onChangeText={props.handleChange('userName')}
                            onBlur={()=>{setColor('#8b00ff')}}
                            value={props.values.userName}
                        />
                        <TextInput 
                            style={[globalStyles.input,{borderColor:borderColor1}]} 
                            placeholder='Номер Телефона'  
                            placeholderTextColor={'#666666'}
                            onChangeText={props.handleChange('phoneNumber')}
                            onBlur={()=>{setColor1('#8b00ff')}}
                            keyboardType='numeric'
                            value={props.values.phoneNumber}                            
                        />
                        <View style={styles.placeholder}></View>
                        <TouchableOpacity onPress={props.handleSubmit}>
                            <View  style={[styles.button, {backgroundColor:btnColor}]}>
                                <Text style={styles.buttonText }>Поехали</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:7,

        height:40,
        width:200,
        alignSelf:'center',

    },
    buttonText:{
        color:'#1a1a1a',
        textTransform:'uppercase',
        fontWeight:"bold",
        fontSize:15,
        textAlign:'center',
        paddingTop:10
    },
    placeholder:{
        height:100
    }
})