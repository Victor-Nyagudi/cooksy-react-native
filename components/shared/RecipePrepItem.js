import globalStyles, { ThemeContext } from "../../non-components/globalStyles";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

function RecipePrepItem({ icon, text, marginRight = 0 }) {
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={{
            ...globalStyles.recipePrepInfo,
            marginRight: marginRight
        }}>
            <FontAwesomeIcon 
                icon={ icon }
                size={ 13 }
                style={{ marginRight: 6.75 }}
                color={ themeContext.themeColors.whiteOrDarkBrown }
            />

            <Text style={{
                ...globalStyles.recipePrepText,
                color: themeContext.themeColors.translucentDarkBrownOrGrey
            }}>
                { text }
            </Text>
        </View>
    );
}

export default RecipePrepItem;