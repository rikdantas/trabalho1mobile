import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import MailScreen from "./screens/MailScreen"


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "MailScreen" component={MailScreen} options={{ title: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}