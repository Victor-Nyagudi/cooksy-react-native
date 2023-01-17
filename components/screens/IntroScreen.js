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
            paddingTop: insets.top,
            paddingBottom: insets.bottom
        }}>
            <Text style={ globalStyles.lightModeTitle }>
                Welcome to the Intro Screen.
            </Text>

            <LightModeIllustration />

            <Pressable 
                style={ globalStyles.introScreenButton }
                onPress={ () => navigation.navigate('Home') }
            >
                <Text style={ globalStyles.introScreenButtonText }>
                    Let's start
                </Text>
            </Pressable>
        </View>
    );
}

export default IntroScreen;