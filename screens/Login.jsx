import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { authUser } = useContext(AuthContext);

  const handlePress = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "Invalid credential");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder="EMAIL"
        style={styles.input}
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        placeholder="PASSWORD"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.loadingButton]}
        onPress={handlePress}
      >
        {loading ? (
          <Text style={styles.buttonText}>Loading...</Text>
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
      <View style={styles.registerLinkContainer}>
        <Text>New to this app ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 26,
    alignSelf: "baseline",
    textTransform: "uppercase",
    color: "#007AFF",
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 5,
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  registerLinkContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "baseline",
  },
  linkText: {
    fontWeight: "bold",
    color: "#007AFF",
  },
  loadingButton: {
    opacity: 0.7,
  },
});

export default Login;
