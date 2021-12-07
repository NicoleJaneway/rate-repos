import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import theme from "../../theme";
import Text from "../Text";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 5,
    backgroundColor: theme.colors.primary,
    textAlign: "center",
    borderRadius: 8,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={{ color: "#FFF" }}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
