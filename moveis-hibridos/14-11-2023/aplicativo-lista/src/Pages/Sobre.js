import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={estilos.sobreContainer}>
      <Text style={estilos.tituloSobre}>Sobre</Text>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into 
         electronic typesetting, remaining essentially unchanged. It was popularised in 
         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
         and more recently with desktop publishing software like Aldus PageMaker including 
         versions of Lorem Ipsum. test
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  sobreContainer: {
   padding: 20,
  },
  tituloSobre: {
   textAlign: "center",
   paddingBottom: 15,
   color: "#FF00FF",
   fontWeight: "bold",
   fontSize: 22
  },
 })