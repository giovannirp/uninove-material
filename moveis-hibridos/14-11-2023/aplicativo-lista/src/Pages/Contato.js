import { StyleSheet, Text, View } from "react-native";

export default function Contato() {
  return (
    <View style={estilos.contatoContainer}>
      <Text style={estilos.tituloContato}>
        Como você prefere falar com a gente?
      </Text>

      <View>
        <Text style={estilos.subTitleContato}>E-mail</Text>
        <Text>lorem@hotmail.com</Text>
      </View>
      
      <View>
        <Text style={estilos.subTitleContato}>Chat</Text>
        <Text>Basta abrir o chat.</Text>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
 contatoContainer: {
  padding: 20,
 },
 tituloContato: {
  textAlign: "center",
  paddingBottom: 15,
  color: "#FF00FF",
  fontWeight: "bold",
  fontSize: 22
 },
 subTitleContato: {
  fontWeight: "bold",
  paddingTop: 15,
 },
})