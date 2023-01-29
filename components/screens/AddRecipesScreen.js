import globalStyles, { ThemeContext } from "../../non-components/globalStyles";
import { View, ScrollView, Text } from "react-native";

import { useContext } from "react";
import Input from "../shared/Input";
import WideButton from "../shared/WideButton";

function AddRecipesScreen({ navigation }) {
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={{
            ...globalStyles.container,
            alignItems: 'flex-start',
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            <ScrollView contentContainerStyle={ globalStyles.formScrollContainer }>
                <Text style={{
                    ...globalStyles.formTitle,
                    color: themeContext.themeColors.whiteOrDarkBrown
                }}>
                    Add a recipe
                </Text>

                <Input 
                    labelText={ 'Title' }
                    placeholder={ 'e.g. Sweet and Sour Chicken' }
                    maxLength={ 75 }
                />

                <Input
                    labelText={ 'Blurb' }
                    placeholder={ 'e.g. The most delicious casserole in the South.' }
                    isMultiline={ true }
                    maxLength={ 100 }
                />
                
                <Input
                    labelText={ 'Description' }
                    placeholder={ 'Tell us more about this recipe...' }
                    isMultiline={ true }
                    maxLength={ 500 }
                />
                
                <Input
                    labelText={ 'Prep Time in Minutes' }
                    placeholder={ 'e.g. 45' }
                    keyboardType={ 'number-pad' }
                />
                
                <Input
                    labelText={ 'Number of Servings' }
                    placeholder={ 'e.g. 3' }
                    keyboardType={ 'number-pad' }
                />
                
                <Input
                    labelText={ 'Image URI' }
                    placeholder={ 'e.g. https://source.unsplash.com/VctkjZHOqlo' }
                    keyboardType={ 'url' }
                    marginBottom={ 24 }
                />

                <WideButton
                    text={ 'Add' }
                    navigation={ navigation }
                    navigationLocation={ 'My Recipes' }
                    marginBottom={ 12 }
                />
                
                <WideButton
                    text={ 'Cancel' }
                    navigation={ navigation }
                    isTransparent={ true }
                    goBack={ true }
                />
            </ScrollView>
        </View>
    );
}

export default AddRecipesScreen;