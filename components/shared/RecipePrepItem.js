import globalStyles from "../../non-components/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

function RecipePrepItem({ icon, text }) {
    return ( 
        <View style={ globalStyles.recipePrepInfo }>
            <FontAwesomeIcon icon={ icon }/>

            <Text>
                { text }
            </Text>
        </View>
    );
}

export default RecipePrepItem;