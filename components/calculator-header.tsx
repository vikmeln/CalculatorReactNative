import { Image, StyleSheet, View } from "react-native";
import menuIcon from "../assets/images/image1.png";
import calculatorIcon from "../assets/images/image2.png";

export default function CalculatorHeader() {
  return (
    <View style={styles.container}>
      <Image source={menuIcon} style={styles.menu} />
      <Image source={calculatorIcon} style={styles.calculator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 55,
  },

  menu: {
    width: 40,
    height: 40,
  },

  calculator: {
    width: 45,
    height: 45,
  },
});
