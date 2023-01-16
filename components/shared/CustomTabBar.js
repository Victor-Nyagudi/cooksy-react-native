/*
    ? Official React Navigation docs uses 'TouchableOpacity', but I'm using
    ? the newer 'Pressable' which already has a long press
    ? built in, so no need to create a custom function to handle
    ? long press. 

    ? Docs example using 'TouchableOpacity'
    ? https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

    ? Medium article using 'Pressable'
    ? https://jaka-tertinek.medium.com/custom-bottom-tab-navigator-react-native-cda675172dac
*/
import { Pressable, View, Text } from "react-native";

function CustomTabBar({ state, descriptors, navigation }) {
    return ( 
        <View style={{flex: 1}}>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const label = 
                        options.tabBarLabel !== undefined 
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented)
                            navigation.navigate({ name: route.name, merge: true });
                    };

                    return (
                        <Pressable
                            accessibilityRole="button"
                            accessibilityState={ isFocused ? { selected: true } : {} }
                            accessibilityLabel={ options.tabBarAccessibilityLabel }
                            testID={ options.tabBarTestID }
                            onPress={ onPress }
                        >
                            <Text style={{ color: isFocused ? 'green' : 'blue'  }}>
                                { label }
                            </Text>
                        </Pressable>
                    );
                })
            }
        </View>
    );
}

export default CustomTabBar;