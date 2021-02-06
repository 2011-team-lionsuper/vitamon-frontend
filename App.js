import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import StepsScreen from "./src/screens/StepsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AllGoalsScreen from "./src/screens/AllGoalsScreen"
import SignUpScreen from "./src/screens/SignUpScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import { SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";
import SingleGoal from "./src/screens/SingleGoal";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllFriendsScreen from "./src/screens/AllFriendsScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function NavTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Steps" component={StepsScreen} />
      <Tab.Screen name="Friends" component={AllFriendsScreen} />
      <Tab.Screen name="Goals" component={AllGoalsScreen} />
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
          <Stack.Screen name="Steps" component={StepsScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SingleGoal" component={SingleGoal} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Steps" component={StepsScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
<<<<<<< HEAD
          <Stack.Screen name="AllGoals" component={AllGoalsScreen} />
=======

          <Stack.Screen name="SignUp" component={SignUpScreen} />

          <Stack.Screen name="Friends" component={AllFriendsScreen} />

>>>>>>> main
        </Stack.Navigator>
      </NavigationContainer>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: "Home",
              //tabBarColor: "#2F004C",
              tabBarIcon: ({ color }) => (
                <SimpleLineIcons name="home" size={24} color={color} />
              ),
            }}
            component={HomeScreen}
          />
        </Tab.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

      {/* <MyTabBar /> */}
      {/* </NavigationContainer>  */}
    </Provider>
  );
}

export default App;
