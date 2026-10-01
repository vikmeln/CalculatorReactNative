import {
  Dimensions,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const isWide = screenWidth >= 700;

type Props = {
  label?: string;
  icon?: ImageSourcePropType;
  backgroundColor?: string;
  onPress?: () => void;
};

export default function CalculatorButton({
  label,
  icon,
  backgroundColor,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: backgroundColor,
          transform: [
            {
              scale: pressed ? 0.92 : 1,
            },
          ],
        },
      ]}
    >
      {icon ? (
        <Image source={icon} style={styles.icon} />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </Pressable>
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
