import globalStyles from "../../non-components/globalStyles";
import { Text, View } from "react-native";

function SettingsScreen() {
    return ( 
        <View>
            <Text style={ globalStyles.lightModeTitleThin }>
                This will be the settings screen.
            </Text>
        </View>
    );
}

export default SettingsScreen;