import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const styles = StyleSheet.create({
  tab: {
    margin: 16,
  },
});

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{tabName}</Text>
    </Pressable>
  );
};

export default AppBarTab;
