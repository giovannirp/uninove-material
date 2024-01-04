import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <View style={estilos.header}>
        <Text style={estilos.tituloHeader}>Mini App</Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#CD3333",
    alignItems: 'center',
    justifyContent: 'center'
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
})

