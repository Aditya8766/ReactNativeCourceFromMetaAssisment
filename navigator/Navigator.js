import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Subscribe from "./Subscribe";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
    </Stack.Navigator>
  );
};

export default Navigator;
