import globalStyles, { ThemeContext } from "../../non-components/globalStyles";
import { View, TextInput, Text } from "react-native";

import { useContext } from "react";

function AddRecipesScreen() {
    const themeContext = useContext(ThemeContext);

    let inputIsFocused = false;

    return ( 
        <View style={{
            ...globalStyles.container,
            alignItems: 'flex-start',
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            <View style={ globalStyles.inputContainer }>
                <Text style={{
                    ...globalStyles.inputLabel,
                    color: themeContext.themeColors.whiteOrDarkBrown
                }}>
                    Title
                </Text>

                <TextInput 
                    style={{
                        ...globalStyles.input,
                        color: themeContext.themeColors.whiteOrDarkBrown,
                        backgroundColor: themeContext.themeColors
                            .darkBrown10PercentOpacityOrDarkGreyPurple
                        // borderStyle: 'solid',
                        // borderWidth: .8,
                        // borderColor: themeContext.themeColors.translucentDarkBrownOrGrey,
                        // shadowColor: 'transparent'
                    }}
                    placeholder="Sample placeholder"
                    placeholderTextColor={ themeContext.themeColors.translucentDarkBrownOrGrey }
                    onFocus={ () => inputIsFocused = true }
                />
            </View>
        </View>
    );
}

export default AddRecipesScreen;