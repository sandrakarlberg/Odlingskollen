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
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input}/>
          <BigButton title="Log In" variant="accent" onPress={onPress} styles={styles.logInBtn}/>
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
    marginVertical: 10,
  },
  logInBtn: {
    width: 300,
    padding: 15,
  },
  Icon: {
    marginBottom: 100,
  },
});
