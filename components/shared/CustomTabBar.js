/*
    ? Official React Navigation docs uses 'TouchableOpacity', but I'm using
    ? the newer 'Pressable' which already has a long press
    ? built in, so no need to create a custom function to handle
    ? long press. 

    ? Docs example using 'TouchableOpacity'
    ? https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

    ? Medium article using 'Pressable'
    ? https://jaka-tertinek.medium.com/custom-bottom-tab-navigator-react-native-cda675172dac
*/
import { Pressable, View, Text } from "react-native";

import globalStyles, { colors, ThemeContext } from "../../non-components/globalStyles";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFireBurner, faGear, faListCheck } from "@fortawesome/free-solid-svg-icons";


function CustomTabBar({ state, descriptors, navigation }) {
    
    const themeContext = useContext(ThemeContext);

    return ( 
        <View style={{
            backgroundColor: themeContext.themeColors.backgroundColor,
            paddingBottom: 10
        }}>
            <View style={{
                ...globalStyles.tabBarContainer,
                /*
                    * Final background color to be implemented after
                    * animations are done
                */  
                // backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
            }}>
                {
                    state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];

                        const label = 
                            options.tabBarLabel !== undefined 
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                        const lowerCaseLabel = label.toLowerCase();
                        
                        const icon = 
                            lowerCaseLabel === 'inspirations' ? faLightbulb
                            : lowerCaseLabel === 'my recipes' ? faListCheck
                            : lowerCaseLabel === 'cook now!' ? faFireBurner
                            : faGear;

                        const isFocused = state.index === index;

                        /*
                            * This custom function should not be 
                            * confused with the built in 'onPress' prop
                            * in some components e.g. 'Button'
                        */
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true
                            });

                            /*
                                * It seems adding params when navigating
                                * to a new route causes it to re-render
                                * which can be used to trigger the animation
                            */
                            if (!isFocused && !event.defaultPrevented)
                                navigation.navigate({ name: route.name, merge: true, params: { shouldAnimate: true } });
                        };

                        const isLastItem = index === state.routes.length - 1;
                        
                        let tabButtonContentColor;
                        let tabButtonBackgroundColor;

                        // * Focused light mode
                        if (isFocused && !themeContext.theme.darkModeEnabled) {
                            tabButtonBackgroundColor = colors.darkBrown;
                            tabButtonContentColor = colors.white;
                        }
                        
                        // * Unfocused light mode
                        else if (!isFocused && !themeContext.theme.darkModeEnabled) {
                            tabButtonBackgroundColor = colors.white;
                            tabButtonContentColor = colors.darkBrown;
                        }
                        
                        // * Focused dark mode
                        else if (isFocused && themeContext.theme.darkModeEnabled) {
                            tabButtonBackgroundColor = colors.white;
                            tabButtonContentColor = colors.darkGreyPurple;
                        }

                        // * Unfocused dark mode
                        else {
                            tabButtonBackgroundColor = colors.darkGreyPurple;
                            tabButtonContentColor = colors.white;
                        }

                        return (
                            <Pressable
                                key={ index }
                                accessibilityRole="button"
                                accessibilityState={ isFocused ? { selected: true } : {} }
                                accessibilityLabel={ options.tabBarAccessibilityLabel }
                                testID={ options.tabBarTestID }
                                onPress={ onPress }
                                style={{ 
                                    ...globalStyles.tabBarButton, 
                                    marginRight: isLastItem ? 0 : 4,
                                    backgroundColor: tabButtonBackgroundColor
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={ icon }
                                    size={ 16 }
                                    color={ tabButtonContentColor }
                                    style={ globalStyles.tabBarIcon }
                                />
                                <Text 
                                    style={{ 
                                        ...globalStyles.tabBarButtonText, 
                                        color: tabButtonContentColor 
                                    }}
                                >
                                    { label }
                                </Text>
                            </Pressable>
                        );
                    })
                }
            </View>
        </View>
    );
}

export default CustomTabBar;