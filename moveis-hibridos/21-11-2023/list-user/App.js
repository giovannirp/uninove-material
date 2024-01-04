import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import UserList from './src/Components/UserList';
import Banner from './src/Components/Banner';

export default function App() {
  return (
    <ScrollView>
      <View>
        <Header />
        <Banner />
        <UserList />
      </View>
    </ScrollView>

  );
}

