import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./utilities/colors";

export default function App() {
  const [userNumber, setUserNumber] =  useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumberGuess={userNumber} />
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.mainScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.mainScreen}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView style={styles.mainScreen}> {screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  backgroundImageStyle:{
    opacity: 0.15
  }
});
