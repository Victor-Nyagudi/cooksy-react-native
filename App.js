import globalStyles from './non-components/globalStyles';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-light': require('./assets/fonts/nunito/Nunito-Light.ttf'),
    'nunito-regular': require('./assets/fonts/nunito/Nunito-Regular.ttf'),
    'nunito-medium': require('./assets/fonts/nunito/Nunito-Medium.ttf'),
    'nunito-semi-bold': require('./assets/fonts/nunito/Nunito-SemiBold.ttf'),
    'nunito-bold': require('./assets/fonts/nunito/Nunito-Bold.ttf'),

    'roboto-light': require('./assets/fonts/roboto/Roboto-Light.ttf'),
    'roboto-regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/roboto/Roboto-Medium.ttf'),
    'roboto-bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),

    'work-sans-light': require('./assets/fonts/work-sans/WorkSans-Light.ttf'),
    'work-sans-regular': require('./assets/fonts/work-sans/WorkSans-Regular.ttf'),
    'work-sans-medium': require('./assets/fonts/work-sans/WorkSans-Medium.ttf'),
    'work-sans-semi-bold': require('./assets/fonts/work-sans/WorkSans-SemiBold.ttf'),
    'work-sans-bold': require('./assets/fonts/work-sans/WorkSans-Bold.ttf')
  });

  if (!fontsLoaded)
    return null;

  return (
    <View style={globalStyles.container}>
      <Text style={ globalStyles.lightModeTitle }>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}