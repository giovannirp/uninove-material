import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import List from './src/Components/List';
import Welcome from './src/Components/Welcome';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Welcome />
        <List />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
