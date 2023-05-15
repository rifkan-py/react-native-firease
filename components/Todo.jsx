import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Todo() {
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>Learn React Native</Text>
      <Text style={styles.date}>{new Date(Date.now()).toDateString()}</Text>
      <TouchableOpacity style={styles.trash}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    elevation: 5,
    position: "relative",
  },
  todoText: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    color: "#444",
    marginBottom: 20,
  },
  date: {
    position: "absolute",
    right: 10,
    bottom: 5,
    color: "#444",
  },
  trash: {
    position: "absolute",
    right: 10,
    top: 5,
  },
});
