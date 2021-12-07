import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
  valid: {
    borderColor: theme.colors.secondary,
  },
  invalid: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ error, secureTextEntry, ...props }) => {
  return (
    <NativeTextInput
      secureTextEntry={secureTextEntry}
      style={[styles.textInput, error ? styles.invalid : styles.valid]}
      {...props}
    />
  );
};

export default TextInput;
