import globalStyles from "../non-components/globalStyles";

import { FlatList, Image, View, Text } from "react-native";
import RecipePrepInfo from "./shared/RecipePrepInfo";

function RecipesColumn({ recipes }) {
    return ( 
        <FlatList 
            data={ recipes }
            keyExtractor={ recipe => recipe.id }
            renderItem={(recipe) => (
                <View style={ globalStyles.recipeCard }>
                    <Image 
                        // source={ require(recipe.imageUrl) } // * <- Investigate why this might be bad based on docs
                        style={ globalStyles.recipeImage }
                    />

                    <Text style={ globalStyles.cardTitleSmall }>
                        { recipe.title }
                    </Text>

                    <Text style={ globalStyles.recipePrepText }>
                        { recipe.blurb }
                    </Text>

                    <RecipePrepInfo 
                        prepTimeInMinutes={ recipe.prepTimeInMinutes }
                        numberOfServings={ recipe.numberOfServings }
                    />
                </View>
            )}
        />
    );
}

export default RecipesColumn;