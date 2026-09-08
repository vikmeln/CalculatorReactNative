import { StyleSheet, Text, View } from "react-native";

export default function CalculatorDisplay() {
  return (
    <View style={styles.display}>
      <Text style={styles.expression}>38 670 ÷ 50 000</Text>
      <Text style={styles.result}>0,7734</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  expression: {
    color: "#999",
    fontSize: 30,
  },

  result: {
    color: "white",
    fontSize: 75,
    fontWeight: "400",
  },
});
