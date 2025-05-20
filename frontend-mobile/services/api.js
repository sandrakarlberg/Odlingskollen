import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-users");
    if (!response.ok) throw new Error("Fel vid hämtning av användare.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const apiLogin = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      await AsyncStorage.setItem("token", data.token);
      const decoded = jwtDecode(data.token);
      return { success: true, name: decoded.name, userId: decoded.userId };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchPlants = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(
      `http://localhost:3000/api/${userId}/get-flowers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Fel vid hämtning av data.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addPlant = async (name, id) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/${id}/add-flower`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ flower_name: name }),
    });

    if (!response.ok) throw new Error("Fel vid hämtning av data.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addUser = async (name, password, email) => {
  try {
    const response = await fetch("http://localhost:3000/api/create-users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, password: password, email: email }),
    });
    if (!response.ok) throw new Error("Fel vid hämtning av data.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
