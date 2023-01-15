import { View, Text } from "react-native";
import globalStyles from "../../non-components/globalStyles";

function HomeScreen() {
    return ( 
        <View>
            <Text style={ globalStyles.lightModeTitleThin }>
                You're on the Home Screen now.
            </Text>
        </View>
    );
}

export default HomeScreen;