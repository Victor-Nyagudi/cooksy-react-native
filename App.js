import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import globalStyles from './non-components/globalStyles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}