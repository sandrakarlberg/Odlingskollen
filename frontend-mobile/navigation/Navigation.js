import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Plants from "../screens/Plants";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";
import Login from "../screens/Login";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightTheme } from "../theme/colors";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: lightTheme.primary,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: lightTheme.secondary,
          tabBarInactiveTintColor: "#E6E6E6",
          tabBarLabelStyle: {
            fontSize: 10,
          },
        }}
      >
        {/* <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="tools"
                color={lightTheme.secondary}
                size={size}
              />
            ),
          }}
        /> */}
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
          name="Alerts"
          component={Notifications}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bell"
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
