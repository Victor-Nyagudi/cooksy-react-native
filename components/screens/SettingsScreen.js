import globalStyles, { colors } from "../../non-components/globalStyles";

import React, { useState } from 'react';

import { Text, View, Switch } from "react-native";

function SettingsScreen() {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

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
                    value={ darkModeEnabled }
                    onValueChange={ () => setDarkModeEnabled(!darkModeEnabled) }
                />
            </View>
        </View>
    );
}

export default SettingsScreen;