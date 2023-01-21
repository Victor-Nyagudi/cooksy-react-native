import { View, Text, Pressable } from "react-native";
import globalStyles, { colors } from "../../non-components/globalStyles";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import LightModeIllustration from "../miscellaneous/LightModeIllustration";
import DarkModeIllustration from "../miscellaneous/DarkModeIllustration";

import { useContext } from "react";
import { ThemeContext } from "../../non-components/globalStyles";

function IntroScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={{
            ...globalStyles.container,
            justifyContent: 'space-between',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor: themeContext.darkModeEnabled 
                ? colors.darkModeBackground
                : colors.lightModeBackground
        }}>
            <View style={{ flex: 1 }}>
                {/* 
                    This component exists purely for styling purposes
                    so that the content is centered on the screen and 
                    the button is at the bottom when 'space-between' is
                    used to justify-content.
                */}
            </View>

            <View style={ globalStyles.introScreenContent }>
                <View style={ globalStyles.intoScreenIllustration }>
                    {
                        themeContext.darkModeEnabled 

                        ? <DarkModeIllustration />

                        : <LightModeIllustration />
                    }
                </View>

                <Text style={{ 
                    ...globalStyles.lightModeTitle,
                    textAlign: 'center',
                    marginBottom: 12,
                    color: themeContext.darkModeEnabled
                        ? colors.white
                        : colors.darkBrown 
                }}>
                    All the recipes at your fingertips
                </Text>

                {/* 
                    This article helped with writing the registered
                    trademark symbol in React Native.
                    https://reactnativecode.com/add-show-copyright-symbol-icon/
                */}
                <Text 
                    style={{
                        ...globalStyles.introScreenSubHeading,
                        color: themeContext.darkModeEnabled
                            ? colors.grey
                            : 'hsla(342, 30%, 8%, .9)'
                    }}>
                    Cooking on Thermomix<Text style={ globalStyles.superscript }>{'\u00AE'}</Text> made easy
                </Text>
            </View>
                
            <View style={ globalStyles.introScreenButtonContainer }>
                <Pressable 
                    style={{
                        ...globalStyles.wideButton,
                        backgroundColor: themeContext.darkModeEnabled
                            ? colors.white
                            : colors.darkBrown
                    }}
                    onPress={ () => navigation.navigate('Home') }
                >
                    <Text style={{
                        ...globalStyles.wideButtonText,
                        color: themeContext.darkModeEnabled
                            ? colors.darkModeBackground
                            : colors.white
                    }}>
                        Let's start
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default IntroScreen;