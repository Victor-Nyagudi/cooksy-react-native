import globalStyles, { ThemeContext } from "../../non-components/globalStyles";

import React, { useContext } from 'react';

import { Text, View, Switch } from "react-native";

function SettingsScreen() {
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={{
            ...globalStyles.container,
            alignItems: 'flex-start'
        }}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={ globalStyles.cardTitleSmall }>
                    Dark Mode
                </Text>

                <Switch 
                    // thumbColor={ colors.white }
                    // trackColor={{ false: 'grey' , true: colors.darkBrown }}
                    value={ themeContext.theme.darkModeEnabled }
                    onValueChange={ themeContext.theme.toggleDarkMode }
                />
                    
            </View>
        </View>
    );
}

export default SettingsScreen;