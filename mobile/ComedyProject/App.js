import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StartPage from './screens/startPage'
import HomePage from './screens/homePage'
import StageDetailsPage from './screens/stageDetailsPage'
import EventDetailsPage from "./screens/eventDetailsPage";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createSharedElementStackNavigator() 

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer  >
        <Stack.Navigator   screenOptions={{headerShown:false}}>
          <Stack.Screen  name='Login' 
                        component = {StartPage}
                        options={{gesturesEnabled: false,
                                  gestureEnabled:false}}/>
          <Stack.Screen name='Home' component = {HomePage}/>
          <Stack.Screen name='Details' 
                        component = {StageDetailsPage}/>
          <Stack.Screen name='EventDetails' component={EventDetailsPage}/>
        </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

