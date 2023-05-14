import { View, Text, StyleSheet } from "react-native";

export default function Todo() {
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>Learn React Native</Text>
      <Text>{Date.now()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    elevation: 5,
  },
  todoText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
