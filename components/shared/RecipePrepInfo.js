import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";

import RecipePrepItem from "./RecipePrepItem";

function RecipePrepInfo() {
    return ( 
        <View style={{ flexDirection: 'row' }}>
            <RecipePrepItem 
                icon={ faClock }
                text={ '50 min' }
            />
            
            <RecipePrepItem 
                icon={ faUtensils }
                text={ '4 ppl' }
            />
        </View>
    );
}

export default RecipePrepInfo;