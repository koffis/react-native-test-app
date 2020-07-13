import React from 'react';
import {StyleSheet, View,} from 'react-native';
import {Navbar} from "./src/Components/Navbar";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from "./src/Components/MainScreen";
import {Provider} from 'react-redux';
import store from "./src/Redux/redux-store";
import Photo from "./src/Components/Photo";


const Stack = createStackNavigator();

export default function App() {
    return (
            <Provider store={store}>
                <NavigationContainer>
                        <Navbar title={'Your gallery'}/>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Home"
                                component={MainScreen}
                            />
                            <Stack.Screen
                                name="Photo"
                                component={Photo}
                            />
                        </Stack.Navigator>
                </NavigationContainer>
            </Provider>
    );
}


const styles = StyleSheet.create({
    container: {
        color: 'black'
    },
});


