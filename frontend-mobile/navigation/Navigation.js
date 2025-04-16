import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Plants from "../screens/Plants";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightTheme } from "../theme/colors";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: lightTheme.background },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={lightTheme.secondary}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Plants"
          component={Plants}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="leaf"
                color={lightTheme.secondary}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={lightTheme.secondary}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="tools"
                color={lightTheme.secondary}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
