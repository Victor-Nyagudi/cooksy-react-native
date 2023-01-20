import globalStyles from "../non-components/globalStyles";

import { Image, View, Text } from "react-native";
import RecipePrepInfo from "./shared/RecipePrepInfo";


function RecipesColumn({ 
    recipes, 
    marginTop = 0,
    rowGap,
    recipeColumnMaxWidth 
}) {
    /*
        * Trying to use a dynamic string for 'require()'
        * proved futile, so I resorted to another way that
        * feels like a good one - storing the image inside
        * an object with an 'id' property then using that to
        * fetch the image. My guess is that when using a 
        * database, this will lead to two trips - one to get
        * the recipe and another to a different column/collection/etc. 
        * in the database to get the image.
    */
    const images = [
        {
            id: 1,
            image: require('../assets/images/jpg/veggie-breakfast.jpg')
        },
        {
            id: 2,
            image: require('../assets/images/jpg/cheese-and-meat.jpg')
        },
        {
            id: 3,
            image: require('../assets/images/jpg/dessert.jpg')
        },
        {
            id: 4,
            image: require('../assets/images/jpg/italian-pasta.jpg')
        },
        {
            id: 5,
            image: require('../assets/images/jpg/omelette.jpg')
        },
        {
            id: 6,
            image: require('../assets/images/jpg/pastries.jpg')
        },
        {
            id: 7,
            image: require('../assets/images/jpg/pie.jpg')
        },
        {
            id: 8,
            image: require('../assets/images/jpg/pumpkins.jpg')
        },
        {
            id: 9,
            image: require('../assets/images/jpg/sushi.jpg')
        },
        {
            id: 10,
            image: require('../assets/images/jpg/teriyaki.jpg')
        },
        {
            id: 11,
            image: require('../assets/images/jpg/soup.jpg')
        }
    ];

    return ( 
        <View style={{ 
            flex:1,
            maxWidth: recipeColumnMaxWidth,
            marginTop: marginTop 
        }}>
            {
                recipes.map(recipe => {
                    return (
                        <View 
                            key={ recipe.id }
                            style={{
                            ...globalStyles.recipeCard,
                            marginBottom: rowGap
                        }}>
                            <Image 
                                source={ images.filter(image => image.id === recipe.imageId)[0].image } // * <- Investigate why this might be bad based on docs
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