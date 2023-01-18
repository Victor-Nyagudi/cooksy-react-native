import globalStyles, { colors } from "../../non-components/globalStyles";
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

function HomeScreen({ navigation }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            backgroundColor: colors.lightModeBackground,
            paddingBottom: insets.bottom
        }}>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    alignItems: 'flex-start'
                }}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={globalStyles.homeScreenHero}
                >
                    <View style={globalStyles.recipeOfDay}>
                        <Text style={{
                            ...globalStyles.lightModeTitleBig,
                            marginBottom: 26
                        }}>
                            Recipe {'\n'}<Text style={{ fontFamily: 'work-sans-light' }}>of the day</Text>
                        </Text>

                        <Text style={{
                            ...globalStyles.cardTitleSmall,
                            marginBottom: 7
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
                        <View style={globalStyles.heroCardTall}>
                            <Text style={globalStyles.lightModeTitleBig}>
                                Cook {'\n'}<Text style={{ fontFamily: 'work-sans-light' }}>like a pro</Text>
                            </Text>

                            <Pressable
                                onPress={() => console.log('This is a dummy link.')}
                            >
                                <Text style={globalStyles.cardTitleSmall}>
                                    Thermomix{'\u00AE'} advanced tips and tricks
                                </Text>

                                <View style={ globalStyles.homeScreenHeroCaret }>
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        style={{ position: 'absolute' }}
                                    />
                                </View>
                            </Pressable>
                        </View>

                        <View style={globalStyles.heroCardShort}>
                            <Text style={globalStyles.lightModeTitleBig}>
                                Check {'\n'}<Text style={{ fontFamily: 'work-sans-light' }}>new updates</Text>
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                <Text style={{
                    ...globalStyles.lightModeTitleBig,
                    marginBottom: 16
                }}>
                    Ren{'\u00E9'} Redzepi's <Text style={{ fontFamily: 'work-sans-light' }}>recommendation</Text>
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
                    onPress={() => navigation.navigate('My recipes')}
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