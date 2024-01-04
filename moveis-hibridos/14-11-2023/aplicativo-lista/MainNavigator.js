import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Pages/Home";
import Contato from "./src/Pages/Contato";
import Sobre from "./src/Pages/Sobre";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contato" component={Contato} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  )
}