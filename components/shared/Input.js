import globalStyles from "../../non-components/globalStyles";

import { Text, View, TextInput } from "react-native";

function Input({ 
    labelText,
    placeholder,
    keyboardType,
    themeContext
 }) {
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
                onFocus={ () => inputIsFocused = true }
            />
        </View>
    );
}

export default Input;