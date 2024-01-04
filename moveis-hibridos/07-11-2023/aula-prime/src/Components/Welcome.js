import { Image, StyleSheet, Text, View } from "react-native";
import detalhes from '../../assets/img1.png';

export default function Welcome() {
  return (
    <>
      <View style={estilos.welcome}>
        <Text style={estilos.title}>Bem Vindo!</Text>
        <Image source={detalhes} style={estilos.image} />
        <Text style={estilos.description}>Bem-vindo à minha tela.</Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  welcome: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  description: {
    fontSize: 16
  }
});