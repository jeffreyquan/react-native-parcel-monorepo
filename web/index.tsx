import React from "react";
import { render } from "react-dom";
import { StyleSheet, View } from "react-native";
import { Counter } from "./shared/components/counter";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

render(<App />, document.getElementById("root"));
