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
                    paddingHorizontal: 30
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
                <Text style={globalStyles.lightModeTitleBig}>
                    Ren{'\u00E9'} Redzepi <Text style={{ fontFamily: 'work-sans-light' }}>recommends</Text>
                </Text>

                <View style={globalStyles.card}>
                    <Image
                        style={globalStyles.cardImage}
                        source={require('../../assets/images/jpg/chef-cooking.jpg')}
                    />

                    <Text style={globalStyles.cardTitleMedium}>
                        Vegan Thai Curry Soup
                    </Text>

                    <Text style={globalStyles.lightModeParagraph}>
                        Spice lovers will slurp up this soup in seconds. Featuring chilli powder, smoked paprika, and cayenne pepper, every bowl brings the heat.
                    </Text>

                    <RecipePrepInfo />

                    <Pressable
                        style={globalStyles.wideButtonTransparent}
                        onPress={() => navigation.navigate('My recipes')}
                    >
                        <Text style={{
                            ...globalStyles.wideButtonText,
                            color: colors.darkBrown
                        }}>
                            Browse more recipes
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;