import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Header from "../components/Header";
import Todo from "../components/Todo";

const Home = ({ navigation }) => {
  const [todoList, setTodoList] = useState([
    { title: "Learn React Native", date: "now", key: "1" },
    { title: "Learn Flutter", date: "now", key: "2" },
    { title: "Learn Xamarin", date: "now", key: "3" },
    { title: "Learn Android", date: "now", key: "4" },
    { title: "Learn Swift", date: "now", key: "5" },
    { title: "Learn Objective-C", date: "now", key: "6" },
    { title: "Learn Svelte", date: "now", key: "7" },
    { title: "Learn React", date: "now", key: "8" },
    { title: "Learn Nodejs", date: "now", key: "9" },
    { title: "Learn Go Lang", date: "now", key: "10" },
    { title: "Learn Rust", date: "now", key: "11" },
    { title: "Learn Java", date: "now", key: "12" },
  ]);
  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate("Login");
  };

  const handleDelete = (key) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <View style={styles.todoListContainer}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <Todo title={item.title} onDelete={() => handleDelete(item.key)} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    marginHorizontal: 12,
    marginTop: 15,
  },
});

export default Home;
