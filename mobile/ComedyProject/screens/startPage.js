

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar, Animated,LayoutAnimation  } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import InputForm from '../components/inputForm';
import SvgComponent from '../components/IntroText';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim,         
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function StartPage({navigation}){

  const [btnValue, setBtnValue] = useState('center')
  const [topValue, setTopValue]= useState(new Animated.Value(0))
  const [bottomValue, setBottomValue] = useState(new Animated.Value(0))

  const startAnimation = () =>{

    Animated.timing(topValue,{
      toValue:-150,
      duration:1000,
      useNativeDriver:false
    }).start()

    Animated.timing(bottomValue,{
      toValue:2,
      duration:5000,
      useNativeDriver:false
    }).start()

  }
  const animatedStyles = {
    top:{transform:[{translateY:topValue}]},
    bottom:{opacity:bottomValue}
  }

  return(
    <TouchableWithoutFeedback onPress={()=>{ 
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
      <TouchableOpacity onPress={(startAnimation)} activeOpacity={0.9}>
        <Animated.View style={[animatedStyles.top]}>
            <FadeInView>{}
              <SvgComponent style={styles.introText}/>
            </FadeInView>
        </Animated.View>
        <Animated.View style={[animatedStyles.bottom]}>
          <Text style={styles.belowIntroText}>Привет. Этот тескт ты больше не увидишь! Но что-бы посадить тебя на нужное место нам нужны твои данные.</Text>
          <InputForm />
        </Animated.View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View> 
  </TouchableWithoutFeedback>  
  )


}
    
const styles = StyleSheet.create({
    introText:{
      alignSelf:'flex-start',
      alignSelf:'center'
    },  
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    belowIntroText:{
        fontSize:15,
        color:'#868686',
        margin:2,
        padding:5
    },
    input:{
      color:'#ffffff',
      margin:5,
      borderWidth:4,
      borderColor:'#666666',
      borderRadius:7,
      paddingLeft:10
    },

})



