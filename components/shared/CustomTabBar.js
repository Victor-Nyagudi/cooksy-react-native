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

import globalStyles, { colors } from "../../non-components/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFireBurner, faGear, faListCheck } from "@fortawesome/free-solid-svg-icons";

function CustomTabBar({ state, descriptors, navigation }) {
    return ( 
        <View style={ globalStyles.tabBarContainer }>
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

                        if (!isFocused && !event.defaultPrevented)
                            navigation.navigate({ name: route.name, merge: true });
                    };

                    const isLastItem = index === state.routes.length - 1;
                    const tabButtonContentColor = isFocused ? colors.white : colors.darkBrown;

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
                                backgroundColor: isFocused ? colors.darkBrown : colors.white
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
    );
}

export default CustomTabBar;