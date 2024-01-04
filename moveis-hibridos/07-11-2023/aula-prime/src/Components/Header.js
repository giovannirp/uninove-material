import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <>
      <View style={estilos.header}>
        <Text style={estilos.tituloHeader}>Listagem</Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    backgroundColor: 'blue'
  },
  tituloHeader: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  }
});