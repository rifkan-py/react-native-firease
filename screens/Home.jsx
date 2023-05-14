import { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Header from "../components/Header";

const Home = ({ navigation }) => {
  const { authUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
