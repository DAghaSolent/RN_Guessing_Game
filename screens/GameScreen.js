import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import {Ionicons} from '@expo/vector-icons'

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

function GameScreen({ userNumberGuess, onGameOver }) {
  const initalGuess = generateRandomBetween(1, 100, userNumberGuess);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  useEffect(() => {
    if (currentGuess === userNumberGuess) {
      onGameOver();
    }
  }, [currentGuess, userNumberGuess, onGameOver]);

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
      <Card>
        <InstructionText styleProp={styles.InstructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, "higher")}
          >
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
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
  InstructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    padding: 2,
  },
});
