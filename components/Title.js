import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    color: '#f0ffff',
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
  },
});
