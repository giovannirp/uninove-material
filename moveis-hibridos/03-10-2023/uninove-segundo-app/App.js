import { ScrollView } from 'react-native';
import Principal from './src/Telas/Principal';
import Header from './src/Components/Header';
import mock from './src/mocks/listagem';

export default function App() {
  return (
    <ScrollView>
      <Header />
      <Principal { ...mock } />
    </ScrollView>
  );
}
