import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

function CookingScreen() {
    return ( 
        <View>
            <Text style={ globalStyles.lightModeTitle } >
                You're on the Cooking Screen. <Text style={ globalStyles.lightModeTitleThin }>Itadakimatsu!</Text> 
            </Text>
        </View>
    );
}

export default CookingScreen;