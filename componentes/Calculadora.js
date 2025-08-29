import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

function Calculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [soma, setSoma] = useState("");
  const validacao = /^[0-9]+(\.[0-9]+)?$/;

  const somar = () => {
    if (!validacao.test(numero1) || !validacao.test(numero2)) {
      Alert.alert("Erro", "Digite apenas números válidos!");
      return;
    }

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    setSoma(n1 + n2);
  };

  const limpar = () => {
    setNumero1("");
    setNumero2("");
    setSoma("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        value={numero1}
        onChangeText={setNumero1}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        value={numero2}
        onChangeText={setNumero2}
        keyboardType="numeric"
      ></TextInput>
      <Button title="Somar" onPress={somar}></Button>
      <Button title="Limpar" onPress={limpar} />
      <Text style={styles.resultado}>Resultado: {soma}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Calculadora;
