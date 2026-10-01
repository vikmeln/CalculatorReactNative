import { StyleSheet, Text, View } from "react-native";

type Props = {
  expression: string;
  result: string;
};

export default function CalculatorDisplay({ expression, result }: Props) {
  return (
    <View style={styles.display}>
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>
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
