import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Todo = ({ item }) => {
  return (
    <SafeAreaView style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.task}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "lightgreen",
    marginTop: 5,
  },
  itemText: { fontSize: 20, color: "green" },
});

export default Todo;
