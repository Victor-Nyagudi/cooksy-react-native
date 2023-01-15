import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

function IntroScreen() {
    return ( 
        <View>
            <Text style={ globalStyles.lightModeTitle }>
                Welcome to the Intro Screen.
            </Text>
        </View>
    );
}

export default IntroScreen;