import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";
import CookingScreen from "../screens/CookingScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

function HomeTabNavigation() {
    return ( 
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={ HomeScreen }/>
            <Tab.Screen name="Recipes" component={ RecipesScreen }/>
            <Tab.Screen name="Cooking" component={ CookingScreen }/>
            <Tab.Screen name="Settings" component={ SettingsScreen }/>
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;