import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";

function RecipePrepInfo() {
    return ( 
        <View style={ globalStyles.recipePrepInfo }>
            <View>
                <FontAwesomeIcon icon={ faClock }/>

                <Text>
                    50 min
                </Text>
            </View>
            
            <View>
                <FontAwesomeIcon icon={ faUtensils } />

                <Text>
                    4 ppl
                </Text>
            </View>
        </View>
    );
}

export default RecipePrepInfo;