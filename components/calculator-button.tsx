import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const isWide = screenWidth >= 700;

type Props = {
  label?: string;
  icon?: ImageSourcePropType;
  backgroundColor?: string;
};

export default function CalculatorButton({
  label,
  icon,
  backgroundColor,
}: Props) {
  return (
    <View style={[styles.button, { backgroundColor: backgroundColor }]}>
      {icon ? (
        <Image source={icon} style={styles.icon} />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: isWide ? 285 : 93,
    height: 93,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 40,
  },

  icon: {
    width: 50,
    height: 50,
  },
});
