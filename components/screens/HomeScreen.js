import globalStyles, { colors, ThemeContext } from "../../non-components/globalStyles";
import {
    View,
    Text,
    ScrollView,
    Pressable,
    Image,
    Animated,
    Easing
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import RecipePrepInfo from "../shared/RecipePrepInfo";

import { useContext, useRef, useEffect } from "react";

function HomeScreen({ navigation, route }) {
    const insets = useSafeAreaInsets();
    const themeContext = useContext(ThemeContext)

    const extraLightFontFamily = 'work-sans-extra-light';

    const initialAnimatedValues = {
        fade: new Animated.Value(0),
        recipeCardPosition: new Animated.Value(80),
        recommendedSectionPosition: new Animated.Value(80),
        remainingHeroCardsPosition: new Animated.Value(100)
    };

    /*
        * Using this 'if' statement instead of useEffect because the screen 
        * isn't re-rendered when switching tabs - only the 
        * custom tab bar is. This is because the stack navigator
        * is what renders all the screens in the tab bar, and
        * switching back and forth from IntroScreen to 
        * HomeTabNavigation is what causes a re-render.
        
        * Note that without adding the params object during 
        * navigation in the tab navbar, this 'if' statement will
        * not be executed.
    */

    if (navigation.isFocused()) {
        Animated.parallel([
            Animated.timing(initialAnimatedValues.fade, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true
            }),
            Animated.timing(initialAnimatedValues.recipeCardPosition, {
                toValue: 0,
                duration: 550,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(initialAnimatedValues.recommendedSectionPosition, {
                toValue: 0,
                duration: 550,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(initialAnimatedValues.remainingHeroCardsPosition, {
                toValue: 0,
                delay: 250,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            })
        ]).start();
    }

    return (
        <View style={{
            ...globalStyles.homeScreenScrollContainer,
            paddingBottom: insets.bottom,
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            <ScrollView
                contentContainerStyle={{ alignItems: 'flex-start' }}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={ globalStyles.homeScreenHero }
                >
                    <Animated.View style={{
                        ...globalStyles.recipeOfDay,
                        opacity: initialAnimatedValues.fade,
                        transform: [{ translateX: initialAnimatedValues.recipeCardPosition }],
                        backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                    }} >
                        <Text style={{
                            ...globalStyles.titleBig,
                            marginBottom: 26,
                            color: themeContext.themeColors.whiteOrDarkBrown
                        }}>
                            Recipe {'\n'}<Text style={{ fontFamily: extraLightFontFamily }}>of the day</Text>
                        </Text>

                        <Text style={{
                            ...globalStyles.cardTitleSmall,
                            marginBottom: 7,
                            color: themeContext.themeColors.whiteOrDarkBrown
                        }}>
                            Roasted Pumpkin Soup
                        </Text>

                        <RecipePrepInfo />

                        <Image
                            source={require('../../assets/images/jpg/pumpkins.jpg')}
                            style={globalStyles.recipeOfDayImage}
                        />
                    </Animated.View>

                    <Animated.View style={{ 
                        paddingTop: 31,
                        opacity: initialAnimatedValues.fade,
                        transform: [{ translateX: initialAnimatedValues.remainingHeroCardsPosition }], 
                    }}>
                        <View style={{
                            ...globalStyles.heroCardTall,
                            backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                        }}>
                            <Text style={{
                                ...globalStyles.titleBig,
                                color: themeContext.themeColors.whiteOrDarkBrown,
                                marginBottom: 20
                            }}>
                                Cook {'\n'}<Text style={{ fontFamily: extraLightFontFamily }}>like a pro</Text>
                            </Text>

                            <Pressable
                                onPress={() => console.log('This is a dummy link.')}
                            >
                                <Text style={{
                                    ...globalStyles.cardTitleSmall,
                                    color: themeContext.themeColors.whiteOrDarkBrown
                                }}>
                                    Thermomix{'\u00AE'} advanced tips and tricks
                                </Text>

                                <View style={ globalStyles.homeScreenHeroCaret }>
                                    <FontAwesomeIcon
                                        icon={ faAngleRight }
                                        style={{ position: 'absolute' }}
                                        color={ themeContext.themeColors.whiteOrDarkBrown }
                                    />
                                </View>
                            </Pressable>
                        </View>

                        <View style={{
                            ...globalStyles.heroCardShort,
                            backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                        }}>
                            <Text style={{
                                ...globalStyles.titleBig,
                                color: themeContext.themeColors.whiteOrDarkBrown
                            }}>
                                Check {'\n'}<Text style={{ fontFamily: extraLightFontFamily }}>new updates</Text>
                            </Text>
                        </View>
                    </Animated.View>
                </ScrollView>

                <Animated.View style={{ 
                    ...globalStyles.recommendedRecipeContainer,
                    transform: [{ translateY: initialAnimatedValues.recommendedSectionPosition }] ,
                    opacity: initialAnimatedValues.fade
                }}>
                    <Text style={{
                        ...globalStyles.titleBig,
                        marginBottom: 16,
                        color: themeContext.themeColors.whiteOrDarkBrown
                    }}>
                        Ren{'\u00E9'} Redzepi's <Text style={{ fontFamily: 'work-sans-extra-light' }}>recommendation</Text>
                    </Text>

                    <View style={{
                        ...globalStyles.recommendedRecipe,
                        backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                    }}>
                        <Image
                            style={globalStyles.recommendedRecipeImage}
                            source={require('../../assets/images/jpg/chef-cooking.jpg')}
                        />

                        <Text style={{
                            ...globalStyles.cardTitleMedium,
                            color: themeContext.themeColors.whiteOrDarkBrown
                        }}>
                            Vegan Thai Curry Soup
                        </Text>

                        <Text style={{
                            ...globalStyles.paragraph,
                            marginBottom: 35,
                            color: themeContext.themeColors.whiteOrDarkBrown
                        }}>
                            Spice lovers will slurp up this soup in seconds. Featuring chilli powder, smoked paprika, and cayenne pepper, every bowl brings the heat.
                        </Text>

                        <RecipePrepInfo marginBottom={ 0 }/>
                    </View>

                    <Pressable
                        style={{
                            ...globalStyles.wideButtonTransparent,
                            marginBottom: 44,
                            backgroundColor: themeContext.themeColors.transparentOrDarkGreyPurple,
                            borderColor: themeContext.themeColors.darkBrownOrDarkGreyPurple
                        }}
                        onPress={() => navigation.navigate('My Recipes')}
                    >
                        <Text style={{
                            ...globalStyles.wideButtonText,
                            color: themeContext.themeColors.whiteOrDarkBrown
                        }}>
                            Browse more recipes
                        </Text>
                    </Pressable>
                </Animated.View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;