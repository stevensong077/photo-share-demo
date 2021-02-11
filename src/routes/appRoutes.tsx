import React from "react";
import Share from "../pages/Share";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const appRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "grey" }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Share" component={Share} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
};

export default appRoutes;
