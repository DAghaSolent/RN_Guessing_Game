import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundry = 100;

function GameScreen({ userNumberGuess }) {
  const initalGuess = generateRandomBetween(
    minBoundary,
    maxBoundry,
    userNumberGuess
  );
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumberGuess) ||
      (direction === "greater" && currentGuess > userNumberGuess)
    ) {
      Alert.alert("Don't lie", "You know this is wrong....", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumberGuess = generateRandomBetween(
      minBoundary,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandomNumberGuess);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
