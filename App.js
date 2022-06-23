import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Character from "./src/pages/Character/Character";
import Detail from "./src/pages/Detail/Detail";
const Stack = createNativeStackNavigator()

const Router = ()=>{
    return(
  <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="CharacterPage" component={Character} options={{headerShown:false}}/>
    <Stack.Screen name="DetailPage" component={Detail} options={{title:'',headerStyle:{backgroundColor:'#00FF00'},headerTintColor:'#4B0082'}} />
    </Stack.Navigator>
  </NavigationContainer>
    )
}
export default Router