import React, { useState,PureComponent } from "react";
import { SafeAreaView, View,Text,StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TextTicker from 'react-native-text-ticker'
import { TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { URL } from "../config"

const dataBase = [
    {name:"Stund-up Club #1", id:'1', date:'26-06',time:'19:00',duration:'1.5', price:'600 руб', address:'Some street 54',reviews:[{reviewer:"Алена Ереева",rating:5,review:"Тонкая, элегантная электрическая кровать для Юли, с цветомузыкой и магнитами. Её должен иметь каждый. У кого Juul"},
                                                                                                                                   {reviewer:"Алена Ереева",rating:4,review:"Тонкая, элегантная электрическая кровать для Юли, с цветомузыкой и магнитами. Её должен иметь каждый. У кого Juul"}], 
                                                                                                                          description:"Уютный интерьер и изысканная кухня сделают ваш обед или ужин незабываемым. Мы рады нашим гостям и всегда стремимся их приятно удивить."},
    {name:"Stund-up Club #2 and some information", id:'2', time:'12:00', price:'600 руб', address:'Some street 54'},
    {name:"Stund", id:'3', time:'13:00', price:'600 руб', address:'Some street 54'},
    {name:"Stund-up Club #4", id:'4', time:'14:00', price:'600 руб', address:'Some street 54'},
    {name:"Stund-up Club #5", id:'5', time:'19:00', price:'600 руб', address:'Some street 54'},
    {name:"Stund-up Club #6", id:'6', time:'12:00', price:'600 руб', address:'Some street 54'},
    {name:"Stund-up Club #7", id:'7', time:'13:00', price:'600 руб', address:'Some street 54'},
]


function _getStageInfo(url){
    stageUrl = url + '/stages/'
    info = fetch()
    return info 
}


export default function HomePage({navigation}){
    
    const stageInfo = _getStageInfo(URL)

    const [selectedData, setSelectedDate] = useState(dataBase)

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{color:'white',
                            marginTop:20,
                            fontSize:20,
                            }}>Популярные События</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{flexGrow:0, margin:0}}
                contentContainerStyle={{margin:0}}
                data={selectedData}
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
                data ={selectedData}
                keyExtractor = {(item)=>{item.id}}
                renderItem = {({item})=>{
                    return(
                        <TouchableOpacity  onPress={()=>{
                            navigation.navigate('Details', {item:item,isTopEvent:false})
                        }}>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles.emptyBox}>

                                </View>
                                <View>
                                    <Text style={styles.eventNameBot}>{item.name}</Text>
                                    <View>
                                        <Text style={styles.eventDescription}>{item.address}</Text>
                                    </View>
                
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
           
        </SafeAreaView>
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