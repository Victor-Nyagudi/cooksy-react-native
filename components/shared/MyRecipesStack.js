import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipesScreen from "../screens/RecipesScreen";
import AddRecipesScreen from "../screens/AddRecipesScreen";

const Stack = createNativeStackNavigator();

function MyRecipesStack() {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="My Recipes" component={ RecipesScreen } />
            
            <Stack.Screen name="Add Recipe" component={ AddRecipesScreen } />
        </Stack.Navigator>
    );
}

export default MyRecipesStack;