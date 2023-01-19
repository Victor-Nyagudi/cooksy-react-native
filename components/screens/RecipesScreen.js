import globalStyles from "../../non-components/globalStyles";

import React, { useState } from 'react';

import { View } from "react-native";
import RecipesColumn from "../RecipesColumn";

function RecipesScreen() {
    const [recipes, setRecipes] = useState([
        {
            "id": 1,
            "title": "Veggie Breakfast",
            "blurb": "Quick and healthy for busy people. SFAREARWRRWAREsffse fsfersdfsers",
            "description": "A special blend of vegetables mixed with a hint of citrus for that tangy taste to get you going in the morning. Keep your waist trim and calories low with this light, healthy breakfast.",
            "prepTimeInMinutes": 12,
            "numberOfServings": 3,
            "imageUrl": "./assets/images/jpg/veggie-breakfast.jpg"
        },
        {
            "id": 2,
            "title": "Cheese 'n' Meat",
            "blurb": "Do you believe in Cheesus?",
            "description": "What do cheese and meat have in common? The answer won't matter once you're done with this dish of glazed ham with your pick of mozzarella or Swiss cheese. We threw in a tomato to ease the guilt.",
            "prepTimeInMinutes": 15,
            "numberOfServings": 4,
            "imageUrl": "./assets/images/jpg/cheese-and-meat.jpg"
        },
        {
            "id": 3,
            "title": "White Chocolate Mousse Souffle",
            "blurb": "A delicious twist on an all-time favorite.",
            "description": "Did you know white chocolate isn't actually chocolate? That's too bad because we love it anyway! Savor the smooth 'chocolatiness' along with a rich caramel blend in this chocolate mousse souffle.",
            "prepTimeInMinutes": 35,
            "numberOfServings": 2,
            "imageUrl": "./assets/images/jpg/dessert.jpg"
        },
        {
            "id": 4,
            "title": "Italian Pasta",
            "blurb": "The best Italy has to offer right in your kitchen.",
            "description": "Simplicity is the ulitmate sophistication, and that's exactly what you get with this Italian pasta recipe. Mixed with cayenne pepper, green onions, and Orion sauce, pasta has never tasted so good.",
            "prepTimeInMinutes": 32,
            "numberOfServings": 5,
            "imageUrl": "./assets/images/jpg/italian-pasta.jpg"
        },
        {
            "id": 5,
            "title": "Moroccan Omelette",
            "blurb": "North Africa's best snack.",
            "description": "Journey to North Africa's heart with this tasty Moroccan Omelette. Made from the Algerian nuthatch's eggs and Rabat's world-famous spices, one serving is never enough.",
            "prepTimeInMinutes": 15,
            "numberOfServings": 1,
            "imageUrl": "./assets/images/jpg/omelette.jpg"
        },
        {
            "id": 6,
            "title": "Glazed Bon Bons",
            "blurb": "A sweet-tooth's guilty pleasure.",
            "description": "These fun-sized treats are perfect for occasions when you have lots of people but not much energy left for dessert. Slot these babies in the oven in just 15 minutes and let the heat do the rest.",
            "prepTimeInMinutes": 40,
            "numberOfServings": 6,
            "imageUrl": "./assets/images/jpg/pastries.jpg"
        },
        {
            "id": 7,
            "title": "Apple Pie",
            "blurb": "As American as...",
            "description": "Who says you have to be American to enjoy some apple pie? Made from mountain honey instead of processed sugar, get the best of both worlds with this low-calorie pie even the stars and stripes would be proud of.",
            "prepTimeInMinutes": 55,
            "numberOfServings": 8,
            "imageUrl": "./assets/images/jpg/pie.jpg"
        },
        {
            "id": 8,
            "title": "Roasted Pumpkin Soup",
            "blurb": "It's scary good!",
            "description": "Get the most out of those pumpkins this Halloween with this roasted pumpkin soup recipe. A touch of cinammon and a splash of kiwi leaves a delicious aftertaste that will haunt your forever.",
            "prepTimeInMinutes": 25,
            "numberOfServings": 3,
            "imageUrl": "./assets/images/jpg/pumpkins.jpg"
        },
        {
            "id": 9,
            "title": "Sushi",
            "blurb": "Itadakimatsu - let's eat!",
            "description": "A perfect meal for a date night or dinner for two. The rolling might take some time to get right, but once you do, you'll be cooking like Yamamoto's your middle name.",
            "prepTimeInMinutes": 18,
            "numberOfServings": 2,
            "imageUrl": "./assets/images/jpg/sushi.jpg"
        },
        {
            "id": 10,
            "title": "Teriyaki Duck",
            "blurb": "Tastes just like chicken.",
            "description": "Take a break from your favorite avian with some teriyaki duck. This dish is prepared in the traditional way by mixing and heating soy sauce, sake (alcoholic Japanese beverage), and sugar for a marinating sauce then grilling the meat.",
            "prepTimeInMinutes": 40,
            "numberOfServings": 3,
            "imageUrl": "./assets/images/jpg/teriyaki.jpg"
        },
    ]);

    /*
        * The flatlist with two columns renders all the odd
        * numbered items on the left and even-numbered ones
        * on the right. That being said, the second item will
        * have some extra margin above it so that it pushes down
        * the entire second column.
    */
    return ( 
        <View style={{
            ...globalStyles.container,
            paddingHorizontal: 20
        }}>
            <RecipesColumn recipes={ recipes } />
        </View>
    );
}

export default RecipesScreen;