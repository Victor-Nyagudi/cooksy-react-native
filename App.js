import globalStyles, { colors, ThemeContext } from "./non-components/globalStyles";
import { useFonts } from "expo-font";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from './components/screens/IntroScreen';
import HomeTabNavigation from "./components/shared/HomeTabNavigation";

import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from 'react';

import { StatusBar } from "expo-status-bar";


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

    'work-sans-extra-light': require('./assets/fonts/work-sans/WorkSans-ExtraLight.ttf'),
    'work-sans-light': require('./assets/fonts/work-sans/WorkSans-Light.ttf'),
    'work-sans-regular': require('./assets/fonts/work-sans/WorkSans-Regular.ttf'),
    'work-sans-medium': require('./assets/fonts/work-sans/WorkSans-Medium.ttf'),
    'work-sans-semi-bold': require('./assets/fonts/work-sans/WorkSans-SemiBold.ttf'),
    'work-sans-bold': require('./assets/fonts/work-sans/WorkSans-Bold.ttf')
  });

  /*
    ? State should be exactly the same as the default
    ? value in ThemeContext as recommended by docs.
    ? https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
  */
  const [theme, setTheme] = useState({
    darkModeEnabled: false,
    toggleDarkMode: toggleDarkMode
  });

  const themeColors = {
    backgroundColor: theme.darkModeEnabled
      ? colors.darkCharcoalGrey
      : colors.offWhite,
    whiteOrDarkBrown: theme.darkModeEnabled
      ? colors.white
      : colors.darkBrown,
    whiteOrDarkGreyPurple: theme.darkModeEnabled
      ? colors.darkGreyPurple
      : colors.white,
    whiteOrDarkCharcoalGrey: theme.darkModeEnabled
      ? colors.darkCharcoalGrey
      : colors.white,
    partialOpacityDarkBrownOrGrey: theme.darkModeEnabled
      ? colors.grey
      : colors.partialOpacityDarkBrown,
    translucentDarkBrownOrGrey: theme.darkModeEnabled
      ? colors.grey
      : colors.translucentDarkBrown,
    transparentOrDarkGreyPurple: theme.darkModeEnabled
      ? colors.darkGreyPurple
      : 'transparent',
    darkBrownOrDarkGreyPurple: theme.darkModeEnabled
      ? colors.darkGreyPurple
      : colors.darkBrown
  };

  function toggleDarkMode() {
    setTheme(prevState => ({
      ...prevState,
      darkModeEnabled: !prevState.darkModeEnabled
    }));
  };

  if (!fontsLoaded)
    return null;

  return (
    /*
      * All screens seem to have the light mode background color
      * somehow even though I don't remember applying it somewhere.
      * Worth looking into.
    */
      <SafeAreaProvider>
        <StatusBar style={ theme.darkModeEnabled ? "light" : "dark" } />

        <NavigationContainer>
          <ThemeContext.Provider value={{ 
              theme: theme,
              themeColors: themeColors 
          }}>
            <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: themeColors.backgroundColor
              },
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: 'work-sans-semi-bold',
                fontSize: 24,
                color: themeColors.whiteOrDarkBrown
              },
              headerTitleAlign: 'center',
            }}>
              <Stack.Screen 
                name='Intro' 
                component={ IntroScreen }
                options={{ 
                  title: 'Cooksy',
                  headerTransparent: true // * <- Absolutely position header. Read more in docs: https://reactnavigation.org/docs/native-stack-navigator#headertransparent
                }}
              />
              
              <Stack.Screen 
                name='Home' 
                component={ HomeTabNavigation }
              />
            </Stack.Navigator>
          </ThemeContext.Provider>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}