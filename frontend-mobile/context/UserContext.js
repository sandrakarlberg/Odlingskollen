import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const loadUserFromToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUsername(decoded.name);
      setUserId(decoded.userId);
    }
  };

  useEffect(() => {
    loadUserFromToken();
  }, []);

  const clearUser = async () => {
    setUsername("");
    setUserId("");
    await AsyncStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ username, userId, clearUser, loadUserFromToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
