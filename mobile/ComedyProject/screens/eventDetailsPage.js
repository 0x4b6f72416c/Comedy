import React, { useEffect,useRef } from "react";
import { render } from "react-dom";
import { SafeAreaView, 
        StyleSheet,View, 
        TouchableOpacity,
        Text,
        Animated } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";





export default function EventDetailsPage( {route,navigation}){

    const {item , isTopEvent} = route.params
    const opacity = useRef(new Animated.Value(0)).current
  
    const calculatedRating = () =>{
        let count = 0 
        let rating = 0

        if (!item.hasOwnProperty('reviews')){
           
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

        while (item.reviews[count]){
            rating += parseInt(item.reviews[count].rating)
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
                <Text>нет отызвов</Text>
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
                <Text style={{color:'#8b00ff' }}>({count} отызвов)</Text>
            </View>

        )
    }
        if (isTopEvent){
            useEffect (()=>{
                Animated.timing(opacity,{
                    toValue:1,
                    duration:200,
                    delay:500
                })
            }, [])
        }
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Home')
            }}>
                <SharedElement id={item.id}>
                    <Animated.View style={styles.temButton}></Animated.View>
                </SharedElement>
            </TouchableOpacity>
            <View style={{flexDirection:"row"}}>
                <View style={{width:"65%"}}>
                    <Text style={styles.eventName}>{item.name}</Text>
                </View>
                <View >
                    {calculatedRating()}
                </View>
                
            </View>
            <View>
                <Text style={styles.eventPrice}>От {item.price}</Text>
            </View>
            <View style={styles.spliter}></View>
            <View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventTextTime}>{item.date} в {item.time}</Text>
                </View>   
                <View style={{flexDirection:'row'}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventTextTime}>около {item.duration} часов</Text>
                </View>    
                <View style={{flexDirection:'row'}}>
                    <View style={styles.pill}></View>
                    <Text style={styles.eventTextTime}>адрес {item.address}</Text>
                </View>    
                    
                    
            </View>
            <View style={styles.spliter}></View>
            <View>
                <Text style={styles.eventText}>{item.description}</Text>
            </View>
            <View style={styles.spliter}></View>
            <View>
                <Text style={styles.eventText}>Отзывы...</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={item.reviews} 
                    keyExtractor={(item)=>{item.reviewer}}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.review}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.reviewerImg}></View>
                                    <Text style={{marginLeft:20}}>{item.reviewer}</Text>
                                </View>
                                <View>
                                    <Text>{item.review}</Text>
                                </View>
                            </View>
                        )
                    }
                    }   
                ></FlatList>
            </View>
        </SafeAreaView>
    )
}
EventDetailsPage.sharedElements = (route, otherRoute,showing)=>{
    const {item} = route.params
    return[item.id]
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#1a1a1a'
    },
    reviewerImg:{
        width:20,
        height:20,
        backgroundColor:'#8b00ff',
        borderRadius:20,
        
    },
    review:{
        backgroundColor:'#707070',
        height:80,
        width:250,
        flexWrap:'wrap',
        flexShrink:1,
        flexDirection:'row',
        marginLeft:5,
        padding:7,
        borderRadius:7
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
    eventTextTime:{
        margin:0,
        paddingLeft:10,
        color:'white',
        fontSize:13
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
    eventPrice:{
        fontSize:13,
        paddingLeft:20,
        color:'#707070'
    },
    pill:{
        marginLeft:6,
        marginTop:6,
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor:'#8b00ff',

    }
})