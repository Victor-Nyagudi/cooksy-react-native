import { StyleSheet } from "react-native";
import React from 'react';

/*
    ? Fonts
    
    * Work Sans - Titles
    * Nunito - paragraph text
    * Roboto - tab navigation text
*/

const borderRadius = {
    parent: 8,
    child: 5,
    tabNavbar: 12
};

export const colors = {
    // * Dark mode 
    darkCharcoalGrey: 'hsla(260, 4%, 15%, 1.0)', // #252427
    darkGreyPurple: 'hsla(270, 4%, 22%, 1.0)', // #373539 
    grey: 'hsla(0, 0%, 80%, 1.0)', //#CBCBCB

    // * Light mode
    offWhite: 'hsla(30, 17%, 95%, 1.0)', // #F5F3F1
    darkBrown: 'hsla(342, 30%, 8%, 1.0)', // #1C0F13
    translucentDarkBrown: 'hsla(342, 30%, 8%, 0.65)', // #1C0F13
    partialOpacityDarkBrown: 'hsla(342, 30%, 8%, .9)',

    // * Shared
    white: 'hsla(0, 0%, 100%, 1.0)' // #FFFFFF
};

export const ThemeContext = React.createContext({
    darkModeEnabled: true,
    toggleDarkMode: () => {}
});

//#region Inherited styles

const lightModeParagraph = {
    fontFamily: 'roboto-light',
    fontSize: 16,
    color: colors.darkBrown
};

const lightModeTitle = {
    fontFamily: 'work-sans-semi-bold',
    fontSize: 30,
    color: colors.darkBrown
};

const wideButton = {
    borderRadius: borderRadius.parent,
    padding: 13,
    width: '100%'
};

const card = {
    backgroundColor: colors.white,
    borderRadius: borderRadius.parent,
    padding: 25
};

const cardTitleSmall ={ 
    fontFamily: 'work-sans-medium',
    fontSize: 16,
    color: colors.darkBrown,
    lineHeight: 22
};

const recipeImage = {
    borderRadius: borderRadius.child,
    maxWidth: '100%'
};

const heroCardMaxWidth = 244;
//#endregion

const globalStyles = StyleSheet.create({
    //#region Shared
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.offWhite,
        paddingHorizontal: 30
    },
    wideButton: {
        ...wideButton,
        backgroundColor: colors.darkBrown
    },
    wideButtonTransparent: {
        ...wideButton,
        borderStyle: 'solid',
        borderWidth: 2
    },
    wideButtonText: {
        fontFamily: 'work-sans-semi-bold',
        fontSize: 18,
        color: colors.white,
        textAlign: 'center'
    },
    recipePrepInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recipePrepText: {
        fontFamily: 'nunito-regular',
        fontSize: 15,
        color: colors.translucentDarkBrown
    },
    flexSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  
    //#endregion

    //#region Miscellaneous
    lightModeBackgroundColor: colors.offWhite,
    darkModeBackgroundColor: colors.darkCharcoalGrey,
    paragraph: { ...lightModeParagraph },
    title: { ...lightModeTitle },
    titleBig: {
        ...lightModeTitle,
        fontSize: 32
    },
    translucentLightModeParagraph: {
        ...lightModeParagraph,
        color: colors.translucentDarkBrown
    },
    lightModeTitleThin: {
        ...lightModeTitle,
        fontFamily: 'work-sans-light'
    },
    debugBorder: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1.5
    },
    //#endregion

    //#region Tab bar styles
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        backgroundColor: 'lightsalmon',
        borderRadius: borderRadius.tabNavbar,
        
        marginHorizontal: 15,
        paddingHorizontal: 7,
        paddingVertical: 6
    },
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        borderRadius: borderRadius.parent,
        backgroundColor: 'transparent',
        paddingHorizontal: 9,
        paddingBottom: 8.5,
        paddingTop: 11
    },
    tabBarButtonText: { 
        fontFamily: 'nunito-regular',
        fontSize: 13 
    },
    tabBarIcon: { marginBottom: 3.5 },
    //#endregion

    //#region Intro screen styles
    introScreenButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        paddingBottom: 30
    },
    intoScreenIllustration: { marginBottom: 50 },
    introScreenSubHeading: {
        fontFamily: 'nunito-regular',
        fontSize: 17,
        color: colors.partialOpacityDarkBrown,
        textAlign: 'center'
    },
    introScreenContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //#endregion

    //#region Home Screen styles
    homeScreenScrollContainer: {
        backgroundColor: colors.offWhite,
        paddingTop: 50
    },
    homeScreenHero: {
        alignItems: 'flex-start',
        paddingLeft: 25
    },
    homeScreenHeroCaret: {
        position: 'absolute',
        bottom: 17.5,
        right: 72
    },
    cardTitleSmall: { ...cardTitleSmall },
    cardTitleMedium: {
        ...cardTitleSmall,
        fontSize: 18,
        marginBottom: 15
    },
    recipeOfDay: {
        ...card,
        maxWidth: 243,
        marginRight: 15,
        marginBottom: 31
    },
    recipeOfDayImage: {
        ...recipeImage,
        height: 121
    },
    heroCardTall: {
        ...card,
        maxWidth: heroCardMaxWidth,
        marginBottom: 15
    },
    heroCardShort: {
        ...card,
        maxWidth: heroCardMaxWidth
    },
    recommendedRecipe: { 
        ...card,
        marginBottom: 14
    },
    recommendedRecipeImage: {
        ...recipeImage,
        height: 187,
        marginBottom: 16
    },
    //#endregion

    //#region My Recipes Screen styles
    recipeColumnsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between' ,
        paddingTop: 20,
        paddingBottom: 69
    },  
    recipeCard: {
        ...card,
        padding: 10
    },
    recipeImage: {
        ...recipeImage,
        height: 92.75,
        marginBottom: 10
    },
    //#endregion

    //#region Cooking Screen styles
    cookingCard: { ...card },
    cookingCardHeaderText: { 
        fontFamily: 'work-sans-regular',
        fontSize: 13 
    },
    cookingCardText: {
        fontFamily: 'roboto-light',
        fontSize: 16
    }
    //#endregion
});

export default globalStyles;