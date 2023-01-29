import globalStyles, { ThemeContext } from "../../non-components/globalStyles";
import { View, TextInput, Text } from "react-native";

import { useContext } from "react";

function AddRecipesScreen() {
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={ globalStyles.container }>
            <Text style={{
                ...globalStyles.title,
                color: themeContext.themeColors.whiteOrDarkBrown
            }}>
                Would you like to add a recipe?
            </Text>
        </View>
    );
}

export default AddRecipesScreen;