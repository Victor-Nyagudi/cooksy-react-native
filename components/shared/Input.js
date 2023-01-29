import globalStyles, { ThemeContext } from "../../non-components/globalStyles";

import { Text, View, TextInput } from "react-native";

import { useContext } from "react";

function Input({ 
    labelText,
    placeholder,
    keyboardType = 'default',
    maxLength = 75,
    isMultiline = false
 }) {
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={ globalStyles.inputContainer }>
            <Text style={{
                ...globalStyles.inputLabel,
                color: themeContext.themeColors.whiteOrDarkBrown
            }}>
                { labelText }
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
                placeholder={ placeholder }
                placeholderTextColor={ themeContext.themeColors.translucentDarkBrownOrGrey }
                keyboardType={ keyboardType }
                // onFocus={ () => inputIsFocused = true }
                maxLength={ maxLength }
                multiline={ isMultiline }
            />
        </View>
    );
}

export default Input;