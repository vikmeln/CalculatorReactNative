import { StyleSheet, View } from "react-native";
import CalculatorButton from "./calculator-button";
import clearIcon from "../assets/images/image3.png";
import PlusMinusIcon from "../assets/images/image4.png";

type Props = {
  onPress: (value: string) => void;
};

export default function CalculatorKeyboard({ onPress }: Props) {
  return (
    <View style={styles.keyboard}>
      <View style={styles.row}>
        <CalculatorButton
          icon={clearIcon}
          backgroundColor="#686767"
          onPress={() => onPress("clear")}
        />
        <CalculatorButton
          label="AC"
          backgroundColor="#686767"
          onPress={() => onPress("AC")}
        />
        <CalculatorButton
          label="%"
          backgroundColor="#686767"
          onPress={() => onPress("%")}
        />
        <CalculatorButton
          label="÷"
          backgroundColor="#FF9500"
          onPress={() => onPress("÷")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="7"
          backgroundColor="#323232"
          onPress={() => onPress("7")}
        />
        <CalculatorButton
          label="8"
          backgroundColor="#323232"
          onPress={() => onPress("8")}
        />
        <CalculatorButton
          label="9"
          backgroundColor="#323232"
          onPress={() => onPress("9")}
        />
        <CalculatorButton
          label="×"
          backgroundColor="#FF9500"
          onPress={() => onPress("×")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="4"
          backgroundColor="#323232"
          onPress={() => onPress("4")}
        />
        <CalculatorButton
          label="5"
          backgroundColor="#323232"
          onPress={() => onPress("5")}
        />
        <CalculatorButton
          label="6"
          backgroundColor="#323232"
          onPress={() => onPress("6")}
        />
        <CalculatorButton
          label="-"
          backgroundColor="#FF9500"
          onPress={() => onPress("-")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="1"
          backgroundColor="#323232"
          onPress={() => onPress("1")}
        />
        <CalculatorButton
          label="2"
          backgroundColor="#323232"
          onPress={() => onPress("2")}
        />
        <CalculatorButton
          label="3"
          backgroundColor="#323232"
          onPress={() => onPress("3")}
        />
        <CalculatorButton
          label="+"
          backgroundColor="#FF9500"
          onPress={() => onPress("+")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          icon={PlusMinusIcon}
          backgroundColor="#323232"
          onPress={() => onPress("+/-")}
        />
        <CalculatorButton
          label="0"
          backgroundColor="#323232"
          onPress={() => onPress("0")}
        />
        <CalculatorButton
          label=","
          backgroundColor="#323232"
          onPress={() => onPress(",")}
        />
        <CalculatorButton
          label="="
          backgroundColor="#FF9500"
          onPress={() => onPress("=")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
