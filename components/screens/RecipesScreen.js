import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

function RecipesScreen() {
    return ( 
        <View>
            <Text style={ globalStyles.lightModeTitle }>
                This is the recipes screen.
            </Text>
        </View>
    );
}

export default RecipesScreen;