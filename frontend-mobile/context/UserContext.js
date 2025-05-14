import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const load = async () => {
      const storedUser = await AsyncStorage.getItem("username");
      if (storedUser) setUsername(storedUser);
    };
    load();
  }, []);

  const saveUsername = async (name) => {
    setUsername(name);
    await AsyncStorage.setItem("username", name);
  };

  const clearUser = async () => {
    setUsername("");
    await AsyncStorage.removeItem("username");
  };

  return (
    <UserContext.Provider value={{ username, saveUsername, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
