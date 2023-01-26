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
import { Animated, Pressable, View, Text, Easing } from "react-native";

import globalStyles, { colors, ThemeContext } from "../../non-components/globalStyles";
import { useContext, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFireBurner, faGear, faListCheck } from "@fortawesome/free-solid-svg-icons";


function CustomTabBar({ state, descriptors, navigation }) {
    
    const themeContext = useContext(ThemeContext);

    const [bgHighlightInfo, setBgHighlightInfo] = useState({
       width: null,
       height: null,
       prevTabButtonXCoordinate: 0, // * <- initial value must be 0 otherwise error is thrown if null/undefined
       activeTabButtonXCoordinate: 0, // * <- x co-ordinate (leftmost part) of active button for alignment
       tabButtonsXCoordinates: [] // * <- This will store all x co-ordinates when page loads
    });

    const initialBgHighlightPosition = new Animated.Value(bgHighlightInfo.prevTabButtonXCoordinate);

    Animated.timing(initialBgHighlightPosition, {
        toValue: bgHighlightInfo.activeTabButtonXCoordinate,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
    }).start();


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
                backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
            }}>
                <Animated.View style={{
                    /*
                        * Width and height values can also be obtained by inspecting the
                        * width and height of the tab buttons. Since these values are
                        * in pixels (absolute), you could technically use them here since 
                        * they won't change based on screen size. This approach is a bit more
                        * hacky and not very reliable.
                    */
                    width: bgHighlightInfo.width, 
                    height: bgHighlightInfo.height,
                    position: 'absolute',
                    top: globalStyles.tabBarContainer.paddingVertical,
                    backgroundColor: themeContext.themeColors.whiteOrDarkBrown,
                    borderRadius: globalStyles.tabBarButton.borderRadius,
                    transform: [{ translateX: initialBgHighlightPosition }]
                }}>
                     {/* 
                        This AnimatedView is the background rectangle that moves to the 
                        selected tab.
                     */}
                </Animated.View>
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
                                * which can be used to trigger the HomeScreen animation
                                * when switching to it.
                            */
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({ name: route.name, merge: true, params: { shouldAnimate: true } });

                                /*
                                    * After clicking, set the active tab x co-ordinate
                                    * to clicked tab button to move the bg highlight.
                                    * The previous x co-ordinate is saved in state to 
                                    * act as a starting point for the animation that plays
                                    * when the page renders (navigating to a new screen triggers
                                    * this re-render because params are passed into navigate method) 
                                */
                                setBgHighlightInfo(prevState => ({
                                    ...prevState, 
                                    prevTabButtonXCoordinate: prevState.activeTabButtonXCoordinate,
                                    activeTabButtonXCoordinate: 
                                        prevState.tabButtonsXCoordinates[index]
                                }));
                            }
                        };

                        const isLastItem = index === state.routes.length - 1;
                        
                        let tabButtonContentColor;

                        // * Focused light mode
                        if (isFocused && !themeContext.theme.darkModeEnabled) 
                            tabButtonContentColor = colors.white;
                        
                        // * Unfocused light mode
                        else if (!isFocused && !themeContext.theme.darkModeEnabled) 
                            tabButtonContentColor = colors.darkBrown;
                        
                        // * Focused dark mode
                        else if (isFocused && themeContext.theme.darkModeEnabled) 
                            tabButtonContentColor = colors.darkGreyPurple;

                        // * Unfocused dark mode
                        else 
                            tabButtonContentColor = colors.white;

                        return (
                            <Pressable
                                key={ index }
                                accessibilityRole="button"
                                accessibilityState={ isFocused ? { selected: true } : {} }
                                accessibilityLabel={ options.tabBarAccessibilityLabel }
                                testID={ options.tabBarTestID }
                                onPress={ onPress }
                                onLayout={(event) => 
                                    setBgHighlightInfo({
                                        width: event.nativeEvent.layout.width,
                                        height: event.nativeEvent.layout.height,
                                        prevTabButtonXCoordinate: isFocused 
                                            ? event.nativeEvent.layout.x
                                            : bgHighlightInfo.activeTabButtonXCoordinate,
                                        activeTabButtonXCoordinate: isFocused 
                                            ? event.nativeEvent.layout.x
                                            : bgHighlightInfo.activeTabButtonXCoordinate,
                                        tabButtonsXCoordinates: 
                                            [
                                                ...bgHighlightInfo.tabButtonsXCoordinates,
                                                event.nativeEvent.layout.x
                                            ]
                                    })
                                }
                                style={{ 
                                    ...globalStyles.tabBarButton, 
                                    marginRight: isLastItem ? 0 : 4
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