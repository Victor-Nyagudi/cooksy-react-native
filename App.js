import globalStyles, { getColor } from "./non-components/globalStyles";
import { useFonts } from "expo-font";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from './components/screens/IntroScreen';
import HomeTabNavigation from "./components/shared/HomeTabNavigation";

import { SafeAreaProvider } from "react-native-safe-area-context";


const Stack = createNativeStackNavigator();

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
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: globalStyles.lightModeBackgroundColor,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'work-sans-semi-bold',
            fontSize: 24,
            color: getColor('darkBrown')
          },
          headerTitleAlign: 'center',
          headerTransparent: true // * <- Absolutely position header. Read more in docs: https://reactnavigation.org/docs/native-stack-navigator#headertransparent
        }}>
          <Stack.Screen 
            name='Intro' 
            component={ IntroScreen }
            options={{ title: 'Cooksy' }}
          />
          
          <Stack.Screen 
            name='Home' 
            component={ HomeTabNavigation }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}