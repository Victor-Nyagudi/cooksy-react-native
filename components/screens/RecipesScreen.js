import globalStyles, { colors } from "../../non-components/globalStyles";

import { View } from "react-native";
import RecipesColumn from "../RecipesColumn";

function RecipesScreen() {
    const recipes = [];

    return ( 
        <View style={{
            ...globalStyles.container,
            alignItems: 'flex-start'
        }}>
            <RecipesColumn />
            
            <RecipesColumn />
        </View>
    );
}

export default RecipesScreen;