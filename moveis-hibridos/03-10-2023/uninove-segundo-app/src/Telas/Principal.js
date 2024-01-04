import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import detalhes from '../../assets/img-1.jpg';
import Itens from "./Itens";

export default function Principal({ itens }) {
  return (
    <>
      <View style={estilos.contentDetalhes}>
        <Text style={estilos.tituloDetalhes}>Detalhe do Produto</Text>
      </View>

      <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Produto Lorem</Text>
      </View>

      <View style={estilos.contentImage}>
        <Image source={detalhes} style={estilos.styleImg} />
      </View>

      <Text style={estilos.descricao}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>

      <Text style={estilos.preco}>
        R$ 40,00
      </Text>

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>
          Comprar
        </Text>
      </TouchableOpacity>

      <Itens { ...itens } />
    </>
  )
}

const estilos = StyleSheet.create({
  contentDetalhes: {
    paddingTop: 30,
    marginLeft: 20,
  },
  tituloDetalhes: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    fontWeight: "bold"
  },
  listaDescricao: {
    paddingTop: 20,
    marginLeft: 20
  },
  nomeLista: {
    fontSize: 15,
    fontWeight: "bold"
  },
  contentImage: {
    marginTop: 25,
  },
  styleImg: {
    width: "92%"
  },
  descricao: {
    color: "#CD3333",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10
  },
  preco: {
    color: "#00008B",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 8,
    fontSize: 26
  },
  botao: {
    marginTop: 30,
    backgroundColor: "#000080",
    paddingVertical: 16,
    borderRadius: 6,
    marginRight: 20,
    marginLeft: 20
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
})