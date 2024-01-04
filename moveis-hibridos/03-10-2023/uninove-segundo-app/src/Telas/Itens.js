import { Image, StyleSheet, Text, View } from "react-native";

export default function Itens({ titulo, lista }) {
  return (
    <View>
      <Text style={estilos.titulo}>{titulo}</Text>

      {lista.map(({ imagem, nome }) => {
        return (
          <View style={estilos.itensList}>
            <Image style={estilos.imagem} source={imagem} />
            <Text style={estilos.nome}>{nome}</Text>
          </View>
        )
      })}

    </View>
  )
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  itensList: {
    marginLeft: 20,
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: "center",
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 1
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 20,
    color: "#191970"
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 8
  }
});