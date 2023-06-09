import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert("Invalid Credential", "Please enter correct email or password");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput placeholder="USERNAME" style={styles.input} />
      <TextInput placeholder="EMAIL" style={styles.input} />
      <TextInput
        placeholder="PASSWORD"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="CONFIRM PASSWORD"
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.loginLinkContainer}>
        <Text>New to this app ? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Login</Text>
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
  loginLinkContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "baseline",
  },
  linkText: {
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default Register;
