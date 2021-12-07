import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import AppBar from "./AppBar/AppBar";
import RepositoryList from "./Repository/RepositoryList";
import SignIn from "./SignInForm/SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#f2f2f2",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
