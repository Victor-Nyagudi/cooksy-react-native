import { View, Text, Pressable } from "react-native";
import globalStyles from "../../non-components/globalStyles";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import LightModeIllustration from "../miscellaneous/LightModeIllustration";
// TODO: import DarkModeIllustration from "../miscellaneous/Dark";


function IntroScreen({ navigation }) {
    const insets = useSafeAreaInsets();

    return ( 
        <View style={{
            ...globalStyles.container,
            justifyContent: 'space-between',
            paddingTop: insets.top,
            paddingBottom: insets.bottom
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
                    <LightModeIllustration />
                </View>

                <Text style={{ 
                    ...globalStyles.lightModeTitle,
                    textAlign: 'center',
                    marginBottom: 12 
                }}>
                    All the recipes on your fingertips
                </Text>

                {/* 
                    This article helped with writing the registered
                    trademark symbol in React Native.
                    https://reactnativecode.com/add-show-copyright-symbol-icon/
                */}
                <Text style={ globalStyles.introScreenSubHeading }>
                    Cooking on Thermomix<Text style={ globalStyles.superscript }>{'\u00AE'}</Text> made easy
                </Text>
            </View>
                
            <View style={ globalStyles.introScreenButtonContainer }>
                <Pressable 
                    style={ globalStyles.introScreenButton }
                    onPress={ () => navigation.navigate('Home') }
                >
                    <Text style={ globalStyles.introScreenButtonText }>
                        Let's start
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default IntroScreen;