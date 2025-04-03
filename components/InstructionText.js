import { Text, StyleSheet } from "react-native";
import Colors from "../utilities/colors";

function InstructionText({ children }) {
  return <Text style={styles.textInstruction}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  textInstruction: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: "bold",
  },
});
