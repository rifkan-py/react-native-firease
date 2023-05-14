import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Application</Text>
      <StatusBar style="inverted" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    paddingTop: 48,
    paddingBottom: 15,
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});

export default Header;
