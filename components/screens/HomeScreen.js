import globalStyles, { 
    ThemeContext, 
    initialAnimatedValues, 
    animationConfig 
} from "../../non-components/globalStyles";
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

import { useContext } from "react";
import WideButton from "../shared/WideButton";

function HomeScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const themeContext = useContext(ThemeContext)

    const extraLightFontFamily = 'work-sans-extra-light';

    const startingAnimatedValues = {
        opacity: new Animated.Value(initialAnimatedValues.opacity),
        recipeCardPosition: new Animated.Value(initialAnimatedValues.cardPosition),
        recommendedSectionPosition: new Animated.Value(initialAnimatedValues.cardPosition),
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
            Animated.timing(startingAnimatedValues.opacity, animationConfig.opacity),
            Animated.timing(startingAnimatedValues.recipeCardPosition, animationConfig.position),
            Animated.timing(startingAnimatedValues.recommendedSectionPosition, animationConfig.position),
            Animated.timing(startingAnimatedValues.remainingHeroCardsPosition, {
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
                        opacity: startingAnimatedValues.opacity,
                        transform: [{ translateX: startingAnimatedValues.recipeCardPosition }],
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
                        opacity: startingAnimatedValues.opacity,
                        transform: [{ translateX: startingAnimatedValues.remainingHeroCardsPosition }], 
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
                    transform: [{ translateY: startingAnimatedValues.recommendedSectionPosition }] ,
                    opacity: startingAnimatedValues.opacity
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

                    <WideButton 
                        text={ "Browse more recipes" }
                        navigation={ navigation }
                        navigationLocation={ 'My Recipes' }
                        isTransparent={ true }
                        marginBottom={ 44 }
                    />
                </Animated.View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;