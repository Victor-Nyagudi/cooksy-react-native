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

const colors = {
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
    fontSize: 32,
    color: colors.darkBrown
}

//#endregion

const globalStyles = StyleSheet.create({
    lightModeBackgroundColor: colors.lightModeBackground,
    darkModeBackgroundColor: colors.darkModeBackground,
    lightModeParagraph: { ...lightModeParagraph },
    lightModeTitle: { ...lightModeTitle },
    translucentLightModeParagraph: {
        ...lightModeParagraph,
        color: colors.translucentDarkBrown
    },
    lightModeTitleThin: {
        ...lightModeTitle,
        fontFamily: 'work-sans-light'
    },

    container: {
        flex: 1,
        backgroundColor: colors.lightModeBackground,
        padding: 30
    },
});

export default globalStyles;