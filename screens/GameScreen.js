import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponenet Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* +- */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
});
