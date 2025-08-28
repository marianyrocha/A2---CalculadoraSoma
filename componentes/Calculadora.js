import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function Calculadora() {
  return (
    <View>
      <TextInput placeholder="primeiro elemento"></TextInput>
      <TextInput placeholder="segundo elemento"></TextInput>
      <Button title="Somar"></Button>
      <Text></Text>
    </View>
  );
}
export default Calculadora;
