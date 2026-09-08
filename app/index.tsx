import { View, StyleSheet } from "react-native";
import CalculatorHeader from "../components/calculator-header";
import CalculatorDisplay from "../components/calculator-display";
import CalculatorKeyboard from "../components/calculator-keyboard";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CalculatorHeader />
        <CalculatorDisplay />
        <CalculatorKeyboard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 40,
  },

  content: {
    flex: 1,
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingHorizontal: 16,
  },
});
