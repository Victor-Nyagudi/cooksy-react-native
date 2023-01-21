import globalStyles, { colors, ThemeContext } from "../../non-components/globalStyles";
import {
    View,
    Text,
    ScrollView,
    Pressable,
    Image
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import RecipePrepInfo from "../shared/RecipePrepInfo";

import { useContext } from "react";

function HomeScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const themeContext = useContext(ThemeContext)

    const extraLightFontFamily = 'work-sans-extra-light';

    return (
        <View style={{
            ...globalStyles.homeScreenScrollContainer,
            paddingBottom: insets.bottom,
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 25,
                    alignItems: 'flex-start'
                }}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={ globalStyles.homeScreenHero }
                >
                    <View style={{
                        ...globalStyles.recipeOfDay,
                        backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                    }} >
                        <Text style={{
                            ...globalStyles.lightModeTitleBig,
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
                    </View>

                    <View style={{ paddingTop: 31 }}>
                        <View style={{
                            ...globalStyles.heroCardTall,
                            backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                        }}>
                            <Text style={{
                                ...globalStyles.lightModeTitleBig,
                                color: themeContext.themeColors.whiteOrDarkBrown
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
                                        icon={faAngleRight}
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
                                ...globalStyles.lightModeTitleBig,
                                color: themeContext.themeColors.whiteOrDarkBrown
                            }}>
                                Check {'\n'}<Text style={{ fontFamily: extraLightFontFamily }}>new updates</Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                <Text style={{
                    ...globalStyles.lightModeTitleBig,
                    marginBottom: 16
                }}>
                    Ren{'\u00E9'} Redzepi's <Text style={{ fontFamily: 'work-sans-extra-light' }}>recommendation</Text>
                </Text>

                <View style={globalStyles.recommendedRecipe}>
                    <Image
                        style={globalStyles.recommendedRecipeImage}
                        source={require('../../assets/images/jpg/chef-cooking.jpg')}
                    />

                    <Text style={{
                        ...globalStyles.cardTitleSmall,
                        fontSize: 18,
                        marginBottom: 15
                    }}>
                        Vegan Thai Curry Soup
                    </Text>

                    <Text style={{
                        ...globalStyles.lightModeParagraph,
                        marginBottom: 35
                    }}>
                        Spice lovers will slurp up this soup in seconds. Featuring chilli powder, smoked paprika, and cayenne pepper, every bowl brings the heat.
                    </Text>

                    <RecipePrepInfo marginBottom={ 0 }/>
                </View>

                <Pressable
                    style={{
                        ...globalStyles.wideButtonTransparent,
                        marginBottom: 44
                    }}
                    onPress={() => navigation.navigate('My Recipes')}
                >
                    <Text style={{
                        ...globalStyles.wideButtonText,
                        color: colors.darkBrown
                    }}>
                        Browse more recipes
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;