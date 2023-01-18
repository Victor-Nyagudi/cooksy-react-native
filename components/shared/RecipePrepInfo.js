import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";

import RecipePrepItem from "./RecipePrepItem";

function RecipePrepInfo({ marginBottom = 15, prepTimeInMinutes = 45, numberOfServings = 3 }) {
    return ( 
        <View style={{
            flexDirection: 'row',
            marginBottom: marginBottom
        }}>
            <RecipePrepItem 
                icon={ faClock }
                text={ `${prepTimeInMinutes} min` }
                marginRight={ 12 }
            />
            
            <RecipePrepItem 
                icon={ faUtensils }
                text={ `${numberOfServings} ppl` }
            />
        </View>
    );
}

export default RecipePrepInfo;