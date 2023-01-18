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

function HomeScreen({ navigation }) {
    return ( 
        <ScrollView>
            <ScrollView 
                horizontal
                style={ globalStyles.homeScreenHero }
            >
                <View style={ globalStyles.recipeOfDay }>
                    <Text style={ globalStyles.lightModeTitleBig }>
                        Recipe <Text style={{ fontFamily: 'work-sans-light' }}>of the day</Text>
                    </Text>

                    <Text style={ globalStyles.cardTitleSmall }>
                        Roasted pumpkin soup
                    </Text>

                    <View style={ globalStyles.recipeInfoContainer }>
                        
                    </View>
                </View>
                
                <View>
                    <View style={ globalStyles.heroCardTall }>
                        <Text style={ globalStyles.lightModeTitleBig }>
                            Cook <Text style={{ fontFamily: 'work-sans-light' }}>like a pro</Text>
                        </Text>

                        <Pressable
                            onPress={ () => console.log('This is a dummy link.') }
                        >
                            <Text style={ globalStyles.cardTitleSmall }>
                                Thermomix{'\u00AE'} advanced tips and tricks
                            </Text>

                            <FontAwesomeIcon icon={ faAngleRight } />
                        </Pressable>
                    </View>
                    
                    <View style={ globalStyles.heroCardShort }>
                        <Text style={ globalStyles.lightModeTitleBig }>
                                Check <Text style={{ fontFamily: 'work-sans-light' }}>new updates</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <Text style={ globalStyles.lightModeTitleBig }>
                Ren{'\u00E9'} Redzepi <Text style={{ fontFamily: 'work-sans-light' }}>recommends</Text>
            </Text>

            <View style={ globalStyles.card }>
                <Image 
                    style={ globalStyles.cardImage }
                    source={ require('../../assets/images/jpg/chef-cooking.jpg') }
                />

                <Text style={ globalStyles.cardTitleMedium }>
                    Vegan Thai Curry Soup
                </Text>

                <Text style={ globalStyles.lightModeParagraph }>
                    Spice lovers will slurp up this soup in seconds. Featuring chilli powder, smoked paprika, and cayenne pepper, every bowl brings the heat.
                </Text>

                <Pressable
                    style={ globalStyles.wideButtonTransparent }
                    onPress={ () => navigation.navigate('My recipes') }
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
    );
}

export default HomeScreen;