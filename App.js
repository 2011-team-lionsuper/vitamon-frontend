import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import StepsScreen from "./src/screens/StepsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import { SimpleLineIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllFriendsScreen from "./src/screens/AllFriendsScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function NavTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarLabel: "Home",
          //tabBarColor: "#2F004C",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Steps"
        component={StepsScreen}
        options={{
          tabBarLabel: "Steps",
          //tabBarColor: "#2F004C",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shoe-prints" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={AllFriendsScreen}
        options={{
          tabBarLabel: "Friends",
          //tabBarColor: "#2F004C",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="group" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={NavTabs} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
cody