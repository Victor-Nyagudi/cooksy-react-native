import globalStyles, { ThemeContext, initialAnimatedValues, animationConfig } from "../../non-components/globalStyles";

import React, { useState, useContext } from 'react';

import { View, ScrollView, Image, Text, Animated } from "react-native";
// import RecipesColumn from "../RecipesColumn";
import RecipePrepInfo from "../shared/RecipePrepInfo";
import WideButton from "../shared/WideButton";


function RecipesScreen({ navigation }) {
    const [recipes, setRecipes] = useState([
        {
            "id": 1,
            "title": "Veggie Breakfast",
            "blurb": "Quick and healthy for busy people.",
            "description": "A special blend of vegetables mixed with a hint of citrus for that tangy taste to get you going in the morning. Keep your waist trim and calories low with this light, healthy breakfast.",
            "prepTimeInMinutes": 12,
            "numberOfServings": 3,
            "imageId": 1,
            "imageUri": "https://source.unsplash.com/IGfIGP5ONV0"
        },
        {
            "id": 2,
            "title": "Cheese 'n' Meat",
            "blurb": "Do you believe in Cheesus?",
            "description": "What do cheese and meat have in common? The answer won't matter once you're done with this dish of glazed ham with your pick of mozzarella or Swiss cheese. We threw in a tomato to ease the guilt.",
            "prepTimeInMinutes": 15,
            "numberOfServings": 4,
            "imageId": 2,
            "imageUri": "https://source.unsplash.com/rgeBbAgKB8A"
        },
        {
            "id": 3,
            "title": "White Chocolate Mousse Souffle",
            "blurb": "A delicious twist on an all-time favorite.",
            "description": "Did you know white chocolate isn't actually chocolate? That's too bad because we love it anyway! Savor the smooth 'chocolatiness' along with a rich caramel blend in this chocolate mousse souffle.",
            "prepTimeInMinutes": 35,
            "numberOfServings": 2,
            "imageId": 3,
            "imageUri": "https://source.unsplash.com/mLtIBNInDGY"
        },
        {
            "id": 4,
            "title": "Italian Pasta",
            "blurb": "The best Italy has to offer right in your kitchen.",
            "description": "Simplicity is the ulitmate sophistication, and that's exactly what you get with this Italian pasta recipe. Mixed with cayenne pepper, green onions, and Orion sauce, pasta has never tasted so good.",
            "prepTimeInMinutes": 32,
            "numberOfServings": 5,
            "imageId": 4,
            "imageUri": "https://source.unsplash.com/s0duM7x1yuA"
        },
        {
            "id": 5,
            "title": "Moroccan Omelette",
            "blurb": "North Africa's best snack.",
            "description": "Journey to North Africa's heart with this tasty Moroccan Omelette. Made from the Algerian nuthatch's eggs and Rabat's world-famous spices, one serving is never enough.",
            "prepTimeInMinutes": 15,
            "numberOfServings": 1,
            "imageId": 5,
            "imageUri": "https://source.unsplash.com/yGrDYmXTGh4"
        },
        {
            "id": 6,
            "title": "Glazed Bon Bons",
            "blurb": "A sweet-tooth's guilty pleasure.",
            "description": "These fun-sized treats are perfect for occasions when you have lots of people but not much energy left for dessert. Slot these babies in the oven in just 15 minutes and let the heat do the rest.",
            "prepTimeInMinutes": 40,
            "numberOfServings": 6,
            "imageId": 6,
            "imageUri": "https://source.unsplash.com/VctkjZHOqlo"
        },
        {
            "id": 7,
            "title": "Apple Pie",
            "blurb": "As American as...",
            "description": "Who says you have to be American to enjoy some apple pie? Made from mountain honey instead of processed sugar, get the best of both worlds with this low-calorie pie even the stars and stripes would be proud of.",
            "prepTimeInMinutes": 55,
            "numberOfServings": 8,
            "imageId": 7,
            "imageUri": "https://source.unsplash.com/yxLFMqYH1BY"
        },
        {
            "id": 8,
            "title": "Roasted Pumpkin Soup",
            "blurb": "It's scary good!",
            "description": "Get the most out of those pumpkins this Halloween with this roasted pumpkin soup recipe. A touch of cinammon and a splash of kiwi leaves a delicious aftertaste that will haunt your forever.",
            "prepTimeInMinutes": 25,
            "numberOfServings": 3,
            "imageId": 8,
            "imageUri": "https://source.unsplash.com/jVC2j2T3IRY"
        },
        {
            "id": 9,
            "title": "Sushi",
            "blurb": "Itadakimatsu - let's eat!",
            "description": "A perfect meal for a date night or dinner for two. The rolling might take some time to get right, but once you do, you'll be cooking like Yamamoto's your middle name.",
            "prepTimeInMinutes": 18,
            "numberOfServings": 2,
            "imageId": 9,
            "imageUri": "https://source.unsplash.com/QcQ_9WxQFC0"
        },
        {
            "id": 10,
            "title": "Teriyaki Duck",
            "blurb": "Tastes just like chicken.",
            "description": "Take a break from your favorite avian with some teriyaki duck. This dish is prepared in the traditional way by mixing and heating soy sauce, sake (alcoholic Japanese beverage), and sugar for a marinating sauce then grilling the meat.",
            "prepTimeInMinutes": 40,
            "numberOfServings": 3,
            "imageId": 10,
            "imageUri": "https://source.unsplash.com/4CJ9AWZT7FM"
        },
        {
            "id": 11,
            "title": "Thai Soup",
            "blurb": "A taste of Thailand.",
            "description": "Thai soup is commonly served in 5-star restaurants all over the world, so we brought the 5-star restaurants to you. The orange finish tastes just as good as it looks, so take a dip, and taste what you've been missing.",
            "prepTimeInMinutes": 15,
            "numberOfServings": 1,
            "imageId": 11,
            "imageUri": "https://source.unsplash.com/fxJTl_gDh28"
        }
    ]);

    const [recipesContainerWidth, setRecipesContainerWidth] = useState(null);
    
    const recipeColumnMaxWidth = 
        recipesContainerWidth ? .48 * recipesContainerWidth
        : '48%';

    /*
        * As calculated above, each column will take up 48% of
        * of the parent container's max width (96% in total), so the
        * gap between them will be 4% of the width which will then be
        * used to determine the 'marginBottom' applied to each recipe
        * card (like a pseudo 'rowGap') for consistency across varying
        * device widths. 10 is the height between the cards in the design, 
        * so I'm using it as a default value.
    */        
    const rowGap = 
        recipesContainerWidth ? .04 * recipesContainerWidth
        : 15; 
        /*
            * 15 (for rowGap) is kind of a magic number I arrived at by seeing 
            * how much the cards jumped around when page loaded and adjusted the
            * number accordingly.
        */ 

    const themeContext = useContext(ThemeContext);

    const startingAnimatedValues = {
        topCardPosition: new Animated.Value(50),
        otherCardsPosition: new Animated.Value(90),
        topCardOpacity: new Animated.Value(initialAnimatedValues.opacity),
        otherCardsOpacity: new Animated.Value(initialAnimatedValues.opacity)
    };
    
    Animated.parallel([
        Animated.timing(startingAnimatedValues.topCardPosition, {
            ...animationConfig.position,
            duration: 450
        }),
        Animated.timing(startingAnimatedValues.topCardOpacity, animationConfig.opacity),
        Animated.timing(startingAnimatedValues.otherCardsPosition, {
            ...animationConfig.position,
            duration: 450
            // delay: 400
        }),
        Animated.timing(startingAnimatedValues.otherCardsOpacity, {
            ...animationConfig.opacity,
            // delay: 400
        })
    ]).start();

    /*
        ! Don't delete comments until issue #7 is addressed
        ! https://github.com/Victor-Nyagudi/cooksy-react-native/issues/7
    */
    return ( 
        <View style={{
            ...globalStyles.container,
            paddingHorizontal: 20,
            backgroundColor: themeContext.themeColors.backgroundColor
        }}>
            {/* 
                I iniitally went with a 'FlatList', but there are some
                limitations in styling multiple columns such that the
                height of all the items inside it should be the same.
                This wasn't going to work since the design has items 
                with different heights. With a 'FlatList', the larger item
                in a row would enlarge it thereby stretching the adjacent 
                recipe card in order to fill remaining space. Using 
                'alignItems: 'flex-start'/'center'/'flex-end'' helps a little, 
                but the vertical spacing between cards becomes inconsistent.
                
                'ScrollView' works for now, but further investigation is needed
                for more clarity should a scenario arise where a 'FlatList' is 
                required because there are many recipes to render (or just talk a 
                designer and ask them to change the design to improve performance).
                I also tried using two 'FlatLists' - one for each column, but
                this resulted in each column scrolling independently. 
            */}

            <ScrollView contentContainerStyle={{ paddingBottom: 14 }}>
                <ScrollView 
                    showsVerticalScrollIndicator={ false }
                    contentContainerStyle={ globalStyles.recipeColumnsContainer }
                    // onLayout={ event => setRecipesContainerWidth(event.nativeEvent.layout.width) }
                >
                    {/* 
                        This View was initially extracted into a component (RecipesColumn) but
                        because of the animations, I opted to repeat the code. Since the recipe
                        cards inside the View is animated, extracting the code into a component
                        and using the component twice results in the animation playing twice causing
                        a brief flash of the first animation which is then interrupted by the second
                        animation. Having all the code inside RecipesScreen means the animation plays
                        only once.

                        The onLayout event (above in the ScrollView) is necessary, but it causes a 
                        re-render due to setRecipesContainerWidth
                    */}
                    <View style={{ 
                        flex:1,
                        maxWidth: recipeColumnMaxWidth,
                        marginTop: 0 
                    }}>
                        {
                            recipes
                            .filter(recipe => recipe.id % 2 == 1)
                            .map((recipe, index) => {
                                return (
                                    <Animated.View 
                                        key={ recipe.id }
                                        style={{
                                        ...globalStyles.recipeCard,
                                        marginBottom: rowGap,
                                        backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple,
                                        transform: [{ 
                                            translateY: index === 0
                                                ? startingAnimatedValues.topCardPosition
                                                : startingAnimatedValues.otherCardsPosition
                                        }],
                                        opacity: index === 0
                                            ? startingAnimatedValues.topCardOpacity
                                            : startingAnimatedValues.otherCardsOpacity
                                    }}>
                                        <Image 
                                            source={{ uri: recipe.imageUri }} // * <- Investigate why this might be bad based on docs
                                            style={ globalStyles.recipeImage }
                                        />
                        
                                        <Text style={{
                                            ...globalStyles.cardTitleSmall,
                                            marginBottom: 3,
                                            color: themeContext.themeColors.whiteOrDarkBrown
                                        }}>
                                            { recipe.title }
                                        </Text>
                                        
                                        <Text style={{
                                            ...globalStyles.recipePrepText,
                                            marginBottom: 30,
                                            color: themeContext.themeColors.whiteOrDarkBrown
                                        }}>
                                            { recipe.blurb }
                                        </Text>
                        
                                        <RecipePrepInfo 
                                            prepTimeInMinutes={ recipe.prepTimeInMinutes }
                                            numberOfServings={ recipe.numberOfServings }
                                            marginBottom={ 0 }
                                        />
                                    </Animated.View>
                                )
                            })
                        }
                    </View>
                    
                    <View style={{ 
                        flex:1,
                        maxWidth: recipeColumnMaxWidth,
                        marginTop: 37 
                    }}>
                        {
                            recipes
                            .filter(recipe => recipe.id % 2 == 0)
                            .map((recipe, index) => {
                                return (
                                    <Animated.View 
                                        key={ recipe.id }
                                        style={{
                                        ...globalStyles.recipeCard,
                                        marginBottom: rowGap,
                                        backgroundColor: themeContext.themeColors.whiteOrDarkGreyPurple,
                                        transform: [{ 
                                            translateY: index === 0
                                                ? startingAnimatedValues.topCardPosition
                                                : startingAnimatedValues.otherCardsPosition
                                        }],
                                        opacity: index === 0
                                            ? startingAnimatedValues.topCardOpacity
                                            : startingAnimatedValues.otherCardsOpacity
                                    }}>
                                        <Image 
                                            source={{ uri: recipe.imageUri }} // * <- Investigate why this might be bad based on docs
                                            style={ globalStyles.recipeImage }
                                        />
                        
                                        <Text style={{
                                            ...globalStyles.cardTitleSmall,
                                            marginBottom: 3,
                                            color: themeContext.themeColors.whiteOrDarkBrown
                                        }}>
                                            { recipe.title }
                                        </Text>
                                        
                                        <Text style={{
                                            ...globalStyles.recipePrepText,
                                            marginBottom: 30,
                                            color: themeContext.themeColors.whiteOrDarkBrown
                                        }}>
                                            { recipe.blurb }
                                        </Text>
                        
                                        <RecipePrepInfo 
                                            prepTimeInMinutes={ recipe.prepTimeInMinutes }
                                            numberOfServings={ recipe.numberOfServings }
                                            marginBottom={ 0 }
                                        />
                                    </Animated.View>
                                )
                            })
                        }
                    </View>
                    
                    
                        {/* <RecipesColumn 
                            recipes={ recipes.filter(recipe => recipe.id % 2 == 1) }
                            rowGap={ rowGap }
                            recipeColumnMaxWidth={ recipeColumnMaxWidth }
                        />
                        
                        <RecipesColumn 
                            recipes={ recipes.filter(recipe => recipe.id % 2 == 0) }
                            rowGap={ rowGap }
                            recipeColumnMaxWidth={ recipeColumnMaxWidth }
                            marginTop={ 37 }
                        /> */}

                </ScrollView>

                <Animated.View style={{ opacity: startingAnimatedValues.topCardOpacity }}>
                    <WideButton 
                        text={ 'Add recipe' }
                        navigation={ navigation }
                        navigationLocation={ 'Add Recipe' }
                    />
                </Animated.View>
            </ScrollView>
        </View>
    );
}

export default RecipesScreen;