import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    display: "flex",
    flexDirection: "row",
    flexGrow: 0,
  },
});

const AppBar = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab tabName="Repos" route="/" />
      <AppBarTab tabName="Sign in" route="/signin" />
    </ScrollView>
  );
};

export default AppBar;
