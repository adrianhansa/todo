import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>ToDo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get("window").width,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "green",
    marginBottom: 20,
    backgroundColor: "lightgreen",
  },
  headerText: { fontSize: 25, textAlign: "center" },
});

export default Header;
