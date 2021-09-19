import React, { useState } from "react";
import {
  Text,
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";
import Header from "./Header";
import Todo from "./Todo";

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
    <View style={styles.appContainer}>
      <Header />
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
            return <Todo item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  appContainer: {
    flex: 1,
  },
  inputText: {
    padding: 10,
    borderColor: "#000000",
    marginBottom: 10,
    borderWidth: 1,
  },
});
