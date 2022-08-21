import React, { useEffect,useRef } from "react";
import { render } from "react-dom";
import { SafeAreaView, 
        StyleSheet,View, 
        TouchableOpacity,
        Text,
        Animated } from "react-native";

export default function EventDetailsPage({route,navigation}){

    const {item} = route.params
    const calculatedRating = () =>{
        let count = 0 
        let rating = 0
       
        if ( item?.stage_reviews === 0){
           
            return(
                <View style={{borderColor:'#8b00ff',
                    borderRadius:5,
                    borderWidth:2,
                    flexDirection:'row',
                    margin:10
                }}>
                    <Text style={{color:'#8b00ff'}}>нет отызвов</Text>
                </View>
                )  
        }

        while (item.stage_reviews[count]){
            rating += parseInt(item.stage_reviews[count].rating)
            count +=1
        }
        if ((count == 0) || (rating == 0)){
            return(
            <View style={{borderColor:'#8b00ff',
                borderRadius:5,
                borderWidth:2,
                flexDirection:'row',
                margin:10
            }}>
                <Text style={{color:'#8b00ff'}}>нет отызвов</Text>
            </View>
            )
        }
        return  (
            <View style={{borderColor:'#8b00ff',
                        borderRadius:5,
                        borderWidth:2,
                        flexDirection:'row',
                        margin:10,
                        padding:1,
                        }}>
                <Text style={{color:'#8b00ff'}}>{(rating/count).toFixed(1)} </Text>
                <Text style={{color:'#8b00ff' }}>| {count} отызв(ов)</Text>
            </View>

        )
    }

    function getDate(item){
        if (item != undefined){
            const date = new Date(item.stage_events[0].time)
            var options = {
                month:'long',
                day:'numeric',
                timezone:'UTC',
                hour: 'numeric',
                minute: 'numeric',
            }
            return date.toLocaleString('ru',options)
        }else{
            return "нет иф-ции"
        }
    }

    return(
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Home')
            }}>
                <View>
                    <Animated.View style={styles.temButton}></Animated.View>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection:"row"}}>
                <View style={{width:"65%"}}>
                    <Text style={styles.eventName}>{item.name}</Text>
                </View>
                <View >
                    {calculatedRating()}
                </View>
            </View>
            <View style={styles.description}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventText}>Время : </Text>
                    <Text style={styles.eventTextRight}>{getDate(item)}</Text>
                </View>
                <View style={styles.spliter}></View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventText}>Продолжительность : </Text>
                    <Text style={styles.eventTextRight}>{item.stage_events[0].duration} ч.</Text>
                </View>
                <View style={styles.spliter}></View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventText}>Цена : </Text>
                    <Text style={styles.eventTextRight}>{item.stage_events[0].price} руб.</Text>
                </View>
                <View style={styles.spliter}></View>
                <View style={{flexDirection:'row',}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventText}>Адрес : </Text>
                    <Text style={styles.eventTextRight}>{item.location}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        description:{
            flex:1,
            marginTop:50,
        },
        container:{
            flex:1,
            flexDirection:'column',
            backgroundColor:'#1a1a1a' 
        },
        temButton:{
            backgroundColor:'#8b00ff',
            height:300,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            margin:0
        },
        eventName:{
            margin:0,
            padding:10,
            color:'white',
            fontSize:20 
        },
        eventText:{
            margin:0,
            paddingTop:5,
            padding:10,
            color:'white',
        },
        eventTextRight:{
            margin:0,
            paddingTop:5,
            padding:10,
            color:'white',
            alignItems:'flex-end'


        },
        spliter:{
            height:2,
            width:'80%',
            marginLeft:'5%',
            marginRight:'5%',
            marginTop:10,
            marginBottom:10,
            backgroundColor:'#505050'
        },
        pill:{
            marginLeft:6,
            marginTop:12,
            width:5,
            height:5,
            borderRadius:5,
            backgroundColor:'#8b00ff',
    
        }
    }
)