import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
  }, []);


  return (
    <>
      <View>
        <Text style={estilos.titulo}>Listando usuários</Text>
        {
          data.map((item) => (
            <View key={item.id}>
              <View style={estilos.itensList}>
                <Text style={estilos.titulo}>Nome:</Text>
                <Text style={estilos.tituloList}>{item.name}</Text>
                
                <Text style={estilos.titulo}>Email:</Text>
                <Text style={estilos.tituloList}>{item.email}</Text>

                <View>
                  <Text style={estilos.titulo}>Endereço:</Text>
                  <Text style={estilos.tituloList}>Rua: {item.address.street}</Text>
                  <Text style={estilos.tituloList}>Complemento: {item.address.suite}</Text>
                </View>

              </View>
            </View>
          ))
        }
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#8A2BE2",
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 16,
    marginTop: 5,
  },
  tituloList: {
    color: "#1E90FF",
    marginLeft: 20,
    fontWeight: "bold"
  },
  itensList: {
    margin: 10,
    padding: 10,
    borderColor: "#696969",
    borderWidth: 1
  }
});