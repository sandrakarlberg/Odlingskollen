import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { lightTheme } from "../theme/colors";
import BigButton from "../components/BigButton";
import { useUser } from "../context/UserContext";

const Login = () => {
  const { username, saveUsername } = useUser();
  const [name, setName] = useState("");

  const onPress = () => {
    console.log("You pressed the button!");
  };

  const handleSubmit = () => {
    saveUsername(name.trim());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/icon-plant.png")} style={styles.icon} />
      <View>
        <TextInput
          placeholder="E-post"
          keyboardType="email-address"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Lösenord"
          secureTextEntry={true}
          style={styles.input}
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
          onPress={onPress}
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
