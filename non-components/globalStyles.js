import { StyleSheet } from "react-native";

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
    darkModeBackground: 'hsla(260, 4%, 15%, 1.0)', // #252427
    darkGreyPurple: 'hsla(270, 4%, 22%, 1.0)', // #373539 
    grey: 'hsla(0, 0%, 80%, 1.0)', //#CBCBCB

    // * Light mode
    lightModeBackground: 'hsla(30, 17%, 95%, 1.0)', // #F5F3F1
    darkBrown: 'hsla(342, 30%, 8%, 1.0)', // #1C0F13
    translucentDarkBrown: 'hsla(342, 30%, 8%, 0.45)', // #1C0F13

    // * Shared
    white: 'hsla(0, 0%, 100%, 1.0)' // #FFFFFF
};

export const getColor = (color) => colors[color] ? colors[color] : 'red';

//#region Inherited styles

const lightModeParagraph = {
    fontFamily: 'roboto-regular',
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

//#endregion

/*
    TODO: Rename global styles to 'lightModeStyles' and
    TODO: then create and export another stylesheet for
    TODO: dark mode called 'darkModeStyles'.
*/
const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.lightModeBackground,
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

    lightModeBackgroundColor: colors.lightModeBackground,
    darkModeBackgroundColor: colors.darkModeBackground,
    lightModeParagraph: { ...lightModeParagraph },
    lightModeTitle: { ...lightModeTitle },
    lightModeTitleBig: {
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

    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightsalmon',
        borderRadius: borderRadius.tabNavbar,
        paddingHorizontal: 7,
        paddingVertical: 6
    },
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        borderRadius: borderRadius.parent,
        backgroundColor: 'white',
        paddingHorizontal: 9,
        paddingBottom: 8.5,
        paddingTop: 11
    },
    tabBarButtonText: { fontFamily: 'nunito-regular' },
    tabBarIcon: { marginBottom: 3.5 },

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
        color: 'hsla(342, 30%, 8%, .9)', // * <- Just dark brown at 90% opacity
        textAlign: 'center'
    },
    introScreenContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default globalStyles;