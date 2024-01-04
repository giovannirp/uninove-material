import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}


