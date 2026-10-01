import { View, StyleSheet } from "react-native";
import { useState } from "react";
import CalculatorHeader from "../components/calculator-header";
import CalculatorDisplay from "../components/calculator-display";
import CalculatorKeyboard from "../components/calculator-keyboard";

export default function Index() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [isCalculated, setIsCalculated] = useState(false);

  const operators = ["+", "-", "×", "÷"];

  const formatNumber = (value: string) => {
    if (!value) {
      return "";
    }
    const normalized = value.replace(",", ".");
    const number = Number(normalized);
    if (Number.isNaN(number)) {
      return value;
    }
    return number.toLocaleString("ru-RU", {
      maximumFractionDigits: 10,
    });
  };

  const formatExpression = (value: string) => {
    if (!value) {
      return "";
    }
    const parts = value.split(/([+×÷-])/);
    return parts
      .map((part) => {
        if (operators.includes(part)) {
          return ` ${part} `;
        }
        if (!part) {
          return "";
        }
        if (part.endsWith(",")) {
          const numberPart = part.slice(0, -1);
          return `${formatNumber(numberPart)},`;
        }
        return formatNumber(part);
      })
      .join("");
  };

  const getAnswer = (value: string) => {
    if (!value) {
      return null;
    }
    let prepared = value;
    if (operators.includes(prepared.slice(-1))) {
      prepared = prepared.slice(0, -1);
    }
    if (!prepared) {
      return null;
    }
    prepared = prepared
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/,/g, ".");
    try {
      const answer = Function(`"use strict"; return (${prepared})`)();
      if (typeof answer !== "number" || !Number.isFinite(answer)) {
        return null;
      }
      return answer;
    } catch {
      return null;
    }
  };

  const updateResult = (newExpression: string) => {
    if (!newExpression) {
      setResult("0");
      return;
    }
    const answer = getAnswer(newExpression);
    if (answer === null) {
      setResult("0");
      return;
    }
    setResult(
      answer.toLocaleString("ru-RU", {
        maximumFractionDigits: 10,
      }),
    );
  };

  const handlePress = (value: string) => {
    if (value === "AC") {
      setExpression("");
      setResult("0");
      setIsCalculated(false);
      return;
    }

    if (value === "clear") {
      const newExpression = expression.slice(0, -1);
      setExpression(newExpression);
      updateResult(newExpression);
      setIsCalculated(false);
      return;
    }

    if (value === "=") {
      const answer = getAnswer(expression);
      if (answer === null) {
        return;
      }
      const formattedResult = answer.toLocaleString("ru-RU", {
        maximumFractionDigits: 10,
      });
      setResult(formattedResult);
      setIsCalculated(true);
      return;
    }

    if (isCalculated) {
      if (operators.includes(value)) {
        const cleanResult = result.replace(/\s/g, "").replace(",", ".");
        const newExpression = cleanResult.replace(".", ",") + value;
        setExpression(newExpression);
        setIsCalculated(false);
        return;
      }

      if (/^[0-9]$/.test(value)) {
        setExpression(value);
        setResult(value);
        setIsCalculated(false);
        return;
      }

      if (value === ",") {
        setExpression("0,");
        setResult("0");
        setIsCalculated(false);
        return;
      }
    }

    if (value === "+/-") {
      if (!expression) {
        setExpression("-");
        setResult("0");
        return;
      }
      const match = expression.match(/(-?\d+(?:,\d+)?)$/);
      if (!match) {
        return;
      }
      const currentNumber = match[0];
      let changedNumber;
      if (currentNumber.startsWith("-")) {
        changedNumber = currentNumber.slice(1);
      } else {
        changedNumber = "-" + currentNumber;
      }
      const newExpression =
        expression.slice(0, expression.length - currentNumber.length) +
        changedNumber;
      setExpression(newExpression);
      updateResult(newExpression);
      return;
    }

    if (value === "%") {
      const match = expression.match(/(-?\d+(?:,\d+)?)$/);
      if (!match) {
        return;
      }
      const currentNumber = match[0];
      const percentValue = Number(currentNumber.replace(",", ".")) / 100;
      const changedNumber = String(percentValue).replace(".", ",");
      const newExpression =
        expression.slice(0, expression.length - currentNumber.length) +
        changedNumber;
      setExpression(newExpression);
      updateResult(newExpression);
      return;
    }

    if (value === ",") {
      const parts = expression.split(/[+×÷-]/);
      const lastNumber = parts[parts.length - 1];
      if (lastNumber.includes(",")) {
        return;
      }
      let newExpression;
      if (expression === "" || operators.includes(expression.slice(-1))) {
        newExpression = expression + "0,";
      } else {
        newExpression = expression + ",";
      }
      setExpression(newExpression);
      updateResult(newExpression);
      return;
    }

    if (operators.includes(value)) {
      if (!expression) {
        if (value === "-") {
          setExpression("-");
        }
        return;
      }
      const lastCharacter = expression.slice(-1);

      if (operators.includes(lastCharacter)) {
        const newExpression = expression.slice(0, -1) + value;
        setExpression(newExpression);
        updateResult(newExpression);
        return;
      }
      const newExpression = expression + value;
      setExpression(newExpression);
      updateResult(newExpression);
      return;
    }

    if (/^[0-9]$/.test(value)) {
      let newExpression;

      if (expression === "0") {
        newExpression = value;
      } else {
        newExpression = expression + value;
      }
      setExpression(newExpression);
      updateResult(newExpression);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CalculatorHeader />
        <CalculatorDisplay
          expression={formatExpression(expression)}
          result={result}
        />
        <CalculatorKeyboard onPress={handlePress} />
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
