import { View, Text, Animated, Easing } from "react-native";
import globalStyles, { ThemeContext } from "../../non-components/globalStyles";

import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CookingScreen({ navigation }) {
    const themeContext = useContext(ThemeContext);

    const initialAnimatedValues = {
        opacity: new Animated.Value(0),
        cardPosition: new Animated.Value(80),
    };

    if (navigation.isFocused()) {
        Animated.parallel([
            Animated.timing(initialAnimatedValues.opacity, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true
            }),
            Animated.timing(initialAnimatedValues.cardPosition, {
                toValue: 0,
                duration: 550,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            })
        ]).start();
    }

    return ( 
        <View style={{
            ...globalStyles.container,
            justifyContent: 'center',
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            <Animated.View style={{
                opacity: initialAnimatedValues.opacity,
                transform: [{ translateX: initialAnimatedValues.cardPosition }]
            }}>
                <View style={{
                    ...globalStyles.cookingCard,
                    backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple
                }}>
                    <View style={{
                        ...globalStyles.flexSpaceBetween,
                        marginBottom: 27
                    }}>
                        <Text style={{
                            ...globalStyles.cookingCardHeaderText,
                            color: themeContext.themeColors.whiteOrDarkBrown
                        }}>
                            Step 1/10    
                        </Text>
                        
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <FontAwesomeIcon 
                                icon={ faCheck }
                                color={ themeContext.themeColors.whiteOrDarkBrown }
                                size={ 10 }
                                transform="down-2"
                                style={{ marginRight: 4 }}
                            />
                        
                            <Text style={{
                                ...globalStyles.cookingCardHeaderText,
                                color: themeContext.themeColors.whiteOrDarkBrown
                            }}>
                                Connected to TM6
                            </Text>
                        </View>
                    </View>

                    <Text style={{
                        ...globalStyles.cardTitleSmall,
                        fontSize: 18,
                        marginBottom: 15,
                        color: themeContext.themeColors.whiteOrDarkBrown
                    }}>
                        Start with the basics
                    </Text>

                    <Text style={{
                        ...globalStyles.cookingCardText,
                        marginBottom: 16,
                        color: themeContext.themeColors.whiteOrDarkBrown
                    }}>
                        Chop pumpkins and sweet potatoes into <Text style={{ fontFamily: 'roboto-regular' }}>small chunks</Text> and place in a bowl.
                    </Text>
                    
                    <Text style={{
                        ...globalStyles.cookingCardText,
                        color: themeContext.themeColors.whiteOrDarkBrown
                    }}>
                        Add water and paprika, and then <Text style={{ fontFamily: 'roboto-regular' }}>select program no.3</Text> and cook for <Text style={{ fontFamily: 'roboto-regular' }}>20 mins</Text>.
                    </Text>
                </View>

            </Animated.View>
            
            <View>

            </View>
        </View>
    );
}

export default CookingScreen;