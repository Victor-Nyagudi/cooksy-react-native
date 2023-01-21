import { View, Text } from "react-native";
import globalStyles, { ThemeContext } from "../../non-components/globalStyles";

import { useContext } from "react";

function CookingScreen() {
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={{
            ...globalStyles.container,
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            <Text style={{
                ...globalStyles.lightModeTitle,
                color: themeContext.themeColors.whiteOrDarkBrown
            }} >
                You're on the Cooking Screen. <Text style={{ 
                    ...globalStyles.lightModeTitleThin,
                    color: themeContext.themeColors.whiteOrDarkBrown
                }}>
                    Itadakimatsu!
                </Text> 
            </Text>
        </View>
    );
}

export default CookingScreen;