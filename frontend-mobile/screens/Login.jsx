import { StyleSheet, Text, TextInput, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { lightTheme } from "../theme/colors";
import BigButton from "../components/BigButton";


const Login = () => {

  const onPress = () => {
    console.log("You pressed the button!");
  };

  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("../assets/icon-plant.png")} style={styles.Icon}/>
        <View>
          <TextInput placeholder="Email" keyboardType="email-address" style={styles.input}/>
          <TextInput placeholder="Lösenord" secureTextEntry={true} style={styles.input}/>
          <BigButton title="Logga In" variant="accent" onPress={onPress} styles={styles.logInBtn}/>
        </View>
        <View style={styles.createContainer}>
          <Text styles={styles.createText}>Har du inget konto?</Text>
          <BigButton title="Skapa ett Konto" variant="secondary" onPress={onPress} styles={styles.createBtn}/>  
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
  logInBtn: {
  },
  createBtn: {
  },
  createContainer: {
    marginTop: 100,
    width: 300,
  },
  createText: {
    color: lightTheme.textPrimary,
    padding: 10,
  },
  Icon: {
    marginBottom: 100,
  },
});
