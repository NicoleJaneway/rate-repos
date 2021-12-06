import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

import theme from "../../theme";

const width = Dimensions.get("window").width; //full width

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    backgroundColor: "#FFF",
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 20,
  },
  flexContainerA: {
    flexDirection: "row",
    alignItems: "stretch",
    width: width,
  },
  flexContainerB: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    margin: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 8,
    color: "#fff",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <>
      <View style={styles.flexContainer}>
        <View style={styles.flexContainerA}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />
          <View style={{ margin: 8, width: width - 88 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                justifySelf: "stretch",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.fullName}</Text>
              <Text style={styles.language}>{item.language}</Text>
            </View>
            <Text
              style={{ color: theme.colors.textSecondary, fontStyle: "italic" }}
            >
              {item.description}
            </Text>
          </View>
        </View>
        <View style={styles.flexContainerB}>
          <Text>
            Forks:{" "}
            {item.forksCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
          <Text>
            Stars:{" "}
            {item.stargazersCount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
          <Text>
            Rating: {item.ratingAverage.toLocaleString(undefined, {})}
          </Text>
          <Text>Review: {item.reviewCount.toLocaleString(undefined, {})}</Text>
        </View>
      </View>
    </>
  );
};

export default RepositoryItem;
