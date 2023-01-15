import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";
import CookingScreen from "../screens/CookingScreen";

const Tab = createBottomTabNavigator();

function HomeTabNavigation() {
    return ( 
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={ HomeScreen }/>
            <Tab.Screen name="Recipes" component={ RecipesScreen }/>
            <Tab.Screen name="Cooking" component={ CookingScreen }/>
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;