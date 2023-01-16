import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import HomeScreen from "../screens/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";
import CookingScreen from "../screens/CookingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFireBurner, faGear, faListCheck } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

function HomeTabNavigation() {
    return ( 
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === 'Feed') 
                        icon = faLightbulb;

                    else if (route.name === 'Recipes')
                        icon = faListCheck;
                    
                    else if (route.name === 'Cooking')
                        icon = faFireBurner;

                    else 
                        icon = faGear;

                    return <FontAwesomeIcon icon={ icon } size={ 15 } color={ focused ? 'red' : 'black' } />
                }                
            })}
        >
            <Tab.Screen name="Feed" component={ HomeScreen }/>

            <Tab.Screen name="Recipes" component={ RecipesScreen } />

            <Tab.Screen name="Cooking" component={ CookingScreen } />

            <Tab.Screen name="Settings" component={ SettingsScreen } />
        </Tab.Navigator>
    );
}

export default HomeTabNavigation;