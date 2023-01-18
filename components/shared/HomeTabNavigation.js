import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";
import CookingScreen from "../screens/CookingScreen";
import SettingsScreen from "../screens/SettingsScreen";

import CustomTabBar from "./CustomTabBar";


const Tab = createBottomTabNavigator();

function HomeTabNavigation() {
    return ( 
        <Tab.Navigator 
            tabBar={ (props) => <CustomTabBar {...props} /> }
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Inspirations" component={ HomeScreen }/>

            <Tab.Screen name="My Recipes" component={ RecipesScreen } />

            <Tab.Screen name="Cook Now!" component={ CookingScreen } />

            <Tab.Screen name="Settings" component={ SettingsScreen } />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;