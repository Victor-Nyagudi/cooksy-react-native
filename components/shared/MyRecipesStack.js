import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipesScreen from "../screens/RecipesScreen";
import AddRecipesScreen from "../screens/AddRecipesScreen";

const Stack = createNativeStackNavigator();

function MyRecipesStack() {
    return ( 
        <Stack.Navigator 
            screenOptions={{ headerShown: false }}
        >
            {/*
                Rendering the 'RecipesScreen' this way ensures the animation
                plays i.e. recipe cards move up with increasing opacity.

                Passing it to the component prop doesn't play the animation.
                
                Read more about passing props to screens here.
                https://reactnavigation.org/docs/hello-react-navigation#passing-additional-props
            */}
            <Stack.Screen name="Recipes">
                {(props) => <RecipesScreen {...props}  />}
            </Stack.Screen>
            
            <Stack.Screen name="Add Recipe" component={ AddRecipesScreen } />
        </Stack.Navigator>
    );
}

export default MyRecipesStack;