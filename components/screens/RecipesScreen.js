import globalStyles from "../../non-components/globalStyles";

import React, { useState } from 'react';

import { View, ScrollView } from "react-native";
import RecipesColumn from "../RecipesColumn";

function RecipesScreen() {
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
        : '100%';

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
        : 10;

    // console.log(recipesContainerWidth);

    return ( 
        <View style={{
            ...globalStyles.container,
            paddingHorizontal: 20
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

            <ScrollView 
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ globalStyles.recipeColumnsContainer }
                onLayout={ event => setRecipesContainerWidth(event.nativeEvent.layout.width) }
            >
                    <RecipesColumn 
                        recipes={ recipes.filter(recipe => recipe.id % 2 == 1) }
                        rowGap={ rowGap }
                        recipeColumnMaxWidth={ recipeColumnMaxWidth }
                    />
                    
                    <RecipesColumn 
                        recipes={ recipes.filter(recipe => recipe.id % 2 == 0) }
                        rowGap={ rowGap }
                        recipeColumnMaxWidth={ recipeColumnMaxWidth }
                        marginTop={ 37 }
                    />
            </ScrollView>
        </View>
    );
}

export default RecipesScreen;