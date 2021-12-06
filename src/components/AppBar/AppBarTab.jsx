import React from "react";
import { StyleSheet, Pressable, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    margin: 16,
  },
});

const AppBarTab = ({ tabName, route }) => {
  return (
    <>
      <ScrollView horizontal>
        <Link to={route}>
          <Pressable style={styles.tab}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>{tabName}</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </>
  );
};

export default AppBarTab;
