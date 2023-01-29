import globalStyles from "../../non-components/globalStyles";
import { Pressable, Text } from "react-native";

import { useContext } from "react";
import { ThemeContext } from "../../non-components/globalStyles";

function WideButton({
    text, 
    navigation,
    navigationLocation, 
    isTransparent = false, 
    marginBottom = 0
}) {
    const themeContext = useContext(ThemeContext);

    return ( 
        <Pressable 
            style={
                isTransparent ? 
                {
                    ...globalStyles.wideButtonTransparent,
                    marginBottom: marginBottom, // 44 for transparent button
                    backgroundColor: themeContext.themeColors.transparentOrDarkGreyPurple,
                    borderColor: themeContext.themeColors.darkBrownOrDarkGreyPurple
                }
                
                : 
                
                {
                    ...globalStyles.wideButtonSolid,
                    backgroundColor: themeContext.themeColors.whiteOrDarkBrown
                }
            }
            onPress={ () => navigation.navigate(navigationLocation) }
        >
            <Text style={{
                ...globalStyles.wideButtonText,
                color: isTransparent 
                    ? themeContext.themeColors.whiteOrDarkBrown
                    : themeContext.themeColors.whiteOrDarkCharcoalGrey
            }}>
                { text }
            </Text>
        </Pressable>
    );
}

export default WideButton;