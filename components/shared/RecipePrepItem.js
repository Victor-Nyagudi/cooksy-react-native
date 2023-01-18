import globalStyles from "../../non-components/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

function RecipePrepItem({ icon, text, marginRight = 0 }) {
    return ( 
        <View style={{
            ...globalStyles.recipePrepInfo,
            marginRight: marginRight
        }}>
            <FontAwesomeIcon 
                icon={ icon }
                size={ 13 }
                style={{ marginRight: 6.75 }}
            />

            <Text style={ globalStyles.recipePrepText }>
                { text }
            </Text>
        </View>
    );
}

export default RecipePrepItem;