import { View, Text, Button } from "react-native";
import globalStyles from "../../non-components/globalStyles";

function IntroScreen({ navigation }) {
    return ( 
        <View>
            <Text style={ globalStyles.lightModeTitle }>
                Welcome to the Intro Screen.
            </Text>

            <Button 
                title="Let's start"
                onPress={ () => navigation.navigate('Home') }
            />
        </View>
    );
}

export default IntroScreen;