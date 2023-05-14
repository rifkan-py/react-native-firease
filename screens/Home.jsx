import { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Header from "../components/Header";
import Todo from "../components/Todo";

const Home = ({ navigation }) => {
  const { authUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate("Login");
  };

  return (
    <View>
      <Header />
      <View style={styles.todoListContainer}>
        <Todo />
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
