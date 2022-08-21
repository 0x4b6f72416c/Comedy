import React, { useState,PureComponent, useEffect, useCallback } from "react";
import { SafeAreaView, View,Text,StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TextTicker from 'react-native-text-ticker'
import { TouchableOpacity,RefreshControl, ScrollView, } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { URL } from "../config"


export default function HomePage({navigation}){
    
    const [stageData, setStageData] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(()=>{
        setRefreshing(true)
        getStageData()
        setRefreshing(false)
    })
    const getStageData = ()=>{
        const stageURL = URL + '/stages/'
        fetch(stageURL,{
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },}).then(response => response.json())
            .then(data => {
                setStageData(data)})
    }
    useState(()=>{
        getStageData()
    },[])


    return(
    <ScrollView
    contentContainerStyle={styles.container}
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}/>
        }>
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{color:'white',
                            marginTop:20,
                            fontSize:20,
                            }}>Популярные Клубы</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{flexGrow:0, margin:0}}
                contentContainerStyle={{margin:0}}
                data={stageData}
                keyExtractor={(item)=>{item.id}}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity  onPress={()=>{
                            navigation.navigate('Details', {item:item,isTopEvent:true})
                        }}>
                            <View>
                                <SharedElement id={item.id}>
                                    <View style={styles.emptyBoxTop}>
                                    </View>
                                </SharedElement>
                                <TextTicker     
                                                style={styles.eventName}
                                                duration={10000}
                                                repeatSpacer={50}
                                                marqueeDelay={1000}
                                                bounce={true}
                                                bounceSpeed={50}

                                                >{item.name}</TextTicker>
                                <View style={{margin:10}}></View>
                            </View>
                        </TouchableOpacity>
                
                )
            }}
            />
            <View>
                <Text style={{color:'white',
                            fontSize:20,margin:5
                            }}>Вечеринки на сегодня</Text>
            </View>
            <FlatList
                data ={stageData}
                keyExtractor = {(item)=>{item.id}}
                renderItem = {({item})=>{
                    return(
                        <TouchableOpacity  onPress={()=>{
                            navigation.navigate('EventDetails', {item:item,isTopEvent:false})
                        }}>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles.emptyBox}>

                                </View>
                                <View>
                                    <Text style={styles.eventNameBot}>{item.name}</Text>
                                    <View>
                                        <Text style={styles.eventDescription}>{item.location}</Text>
                                    </View>
                
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
           
        </SafeAreaView>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1a1a1a',
    },
    eventName:{
        margin:0,
        padding:5,
        color:'white',
        width:80
    },
    eventNameBot:{
        margin:0,
        padding:5,
        color:'white',

    },
    eventDescription:{
        color:'#666666'
    },
    emptyBox:{
        backgroundColor:'#8b00ff', 
        width:80,
        height:80,
        borderRadius:7,
        margin:5
    },
    emptyBoxTop:{
        backgroundColor:'#8b00ff', 
        width:90,
        height:90,
        borderRadius:7,
        margin:5,

        
    }
})