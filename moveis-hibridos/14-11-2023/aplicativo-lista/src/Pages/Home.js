import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={estilos.tituloContato}>
        Seja bem vindo!
      </Text>

      <Button
        title="Ir para contato"
        onPress={() => navigation.navigate('Contato')}
      />

      <Text style={estilos.tituloInfo}>
        Mais informações
      </Text>

      <Button 
        title="Sobre, saiba mais"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tituloContato: {
    textAlign: "center",
    paddingBottom: 15,
    color: "#FF00FF",
    fontWeight: "bold",
    fontSize: 25,
    padding: 20
  },
  tituloInfo: {
    fontWeight: "bold",
    padding: 20,
    textAlign: "center"
  }
})