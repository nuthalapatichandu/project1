import React from "react";
import {View,StyleSheet} from "react-native"
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./screens/SearchScreen";
import Settings from "./screens/Settings";


let Tab = createBottomTabNavigator();

function app(){
  return(
    <NavigationContainer>
       <Tab.Navigator>
          <Tab.Screen name="Home" component={SearchScreen} options={{
          }}/>
          <Tab.Screen name="Settings" component={Settings} options={{
          }}/>
       </Tab.Navigator>
     </NavigationContainer>
  );
}


export default app;