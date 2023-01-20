import globalStyles from "../non-components/globalStyles";

import { Image, View, Text } from "react-native";
import RecipePrepInfo from "./shared/RecipePrepInfo";


function RecipesColumn({ 
    recipes, 
    marginTop = 0,
    rowGap,
    recipeColumnMaxWidth 
}) {
    const images = {

    }

    return ( 
        <View style={{ 
            flex:1,
            maxWidth: recipeColumnMaxWidth,
            marginTop: marginTop 
        }}>
            {
                recipes.map(recipe => {
                    // const imageUrl = recipe.imageUrl;
                    
                    // const image = require(imageUrl);
                    // console.log(typeof imageUrl);

                    return (
                        <View 
                            key={ recipe.id }
                            style={{
                            ...globalStyles.recipeCard,
                            marginBottom: rowGap
                        }}>
                            <Image 
                                source={ require('../assets/images/jpg/teriyaki.jpg') } // * <- Investigate why this might be bad based on docs
                                style={ globalStyles.recipeImage }
                            />
            
                            <Text style={{
                                ...globalStyles.cardTitleSmall,
                                marginBottom: 3
                            }}>
                                { recipe.title }
                            </Text>
                            
                            <Text style={{
                                ...globalStyles.recipePrepText,
                                marginBottom: 30
                            }}>
                                { recipe.blurb }
                            </Text>
            
                            <RecipePrepInfo 
                                prepTimeInMinutes={ recipe.prepTimeInMinutes }
                                numberOfServings={ recipe.numberOfServings }
                                marginBottom={ 0 }
                            />
                        </View>
                    )
                })
            }
        </View>
    );
}

export default RecipesColumn;