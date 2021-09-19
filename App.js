import React, { useState } from "react";
import {
  Text,
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = (task) => {
    const todo = { id: Math.random(), task: task };
    setTodos([...todos, todo]);
    setTodo("");
    console.log(todos);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a todo"
        style={styles.inputText}
        value={todo}
        onChangeText={(e) => setTodo(e)}
      />
      <Button title="Add Todo" onPress={() => addTodo(todo)} />
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return <Text>{item.task}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    padding: 10,
    borderColor: "#000000",
    marginBottom: 10,
    borderWidth: 1,
  },
});
