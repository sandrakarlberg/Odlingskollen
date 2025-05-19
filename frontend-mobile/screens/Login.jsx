import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { lightTheme } from "../theme/colors";
import BigButton from "../components/BigButton";
import { useUser } from "../context/UserContext";
import { fetchUsers } from "../services/api";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const { saveUsername } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      if (data) setUsers(data);
    };
    fetchData();
  }, []);

  const handleNewAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const handleSubmit = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      console.log("Fel inloggningsuppgifter, försök igen.");
    } else {
      saveUsername(foundUser.name);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/icon-plant.png")} style={styles.icon} />
      <View>
        <TextInput
          placeholder="E-post"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Lösenord"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <BigButton
          title="Logga in"
          variant="accent"
          onPress={handleSubmit}
          styles={styles.logInBtn}
        />
      </View>
      <View style={styles.createContainer}>
        <Text style={styles.createText}>Har du inget konto?</Text>
        <BigButton
          title="Skapa ett konto"
          variant="secondary"
          onPress={handleNewAccount}
          styles={styles.createBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightTheme.primary,
  },
  input: {
    backgroundColor: lightTheme.secondary,
    borderRadius: 10,
    width: 300,
    padding: 15,
    marginBottom: 10,
  },
  logInBtn: {},
  createBtn: {},
  createContainer: {
    marginTop: 100,
    width: 300,
  },
  createText: {
    color: lightTheme.textPrimary,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  icon: {
    marginBottom: 100,
  },
});
