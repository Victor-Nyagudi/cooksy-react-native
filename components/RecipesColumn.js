import globalStyles from "../non-components/globalStyles";

import { FlatList, Image, View, Text } from "react-native";
import RecipePrepInfo from "./shared/RecipePrepInfo";

// TODO: Rename this component to RecipesList or move code
// TODO: over to RecipesScreen

function RecipesColumn({ recipes }) {
    /*
        ? The docs recommend extracting this function instead
        ? of using an arrow function in a FlatList's 'renderItem' prop
        ? to improve performance
        ? https://reactnative.dev/docs/optimizing-flatlist-configuration#avoid-anonymous-function-on-renderitem
    */
    const renderItem = ({ item, index }) => (
        <View style={{
            ...globalStyles.recipeCard
        }}>
            <Image 
                source={ require('../assets/images/jpg/pastries.jpg') } // * <- Investigate why this might be bad based on docs
                style={ globalStyles.recipeImage }
            />

            <Text style={{
                ...globalStyles.cardTitleSmall,
                marginBottom: 3
            }}>
                { item.title }
            </Text>
            
            <Text style={{
                ...globalStyles.recipePrepText,
                marginBottom: 30
            }}>
                { item.blurb }
            </Text>

            <RecipePrepInfo 
                prepTimeInMinutes={ item.prepTimeInMinutes }
                numberOfServings={ item.numberOfServings }
                marginBottom={ 0 }
            />
        </View>
    );

    return ( 
        <FlatList 
            contentContainerStyle={ globalStyles.recipeCards }
            data={ recipes }
            keyExtractor={ item => item.id }

            initialNumToRender={ 10 }
            numColumns={ 2 }
            columnWrapperStyle={{  justifyContent: 'space-between' }}

            showsVerticalScrollIndicator={ false }
            renderItem={ renderItem }
        />
    );
}

export default RecipesColumn;