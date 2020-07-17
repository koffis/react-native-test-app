import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from "./src/Components/MainScreen";
import {Provider} from 'react-redux';
import store from "./src/Redux/redux-store";
import Photo from "./src/Components/Photo";
import User from "./src/Components/User";


const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="YRGallery"
                        component={MainScreen}
                        options={{
                            headerStyle: {
                                backgroundColor: '#000'
                            },
                            headerTintColor: '#737475'
                        }}
                    />
                    <Stack.Screen
                        name="Photo"
                        component={Photo}
                        options={{
                            headerStyle: {
                                backgroundColor: '#000'
                            },
                            headerTintColor: '#737475',
                        }}

                    />
                    <Stack.Screen
                        name="User"
                        component={User}
                        options={({ route }) =>
                            ({ title: route.params.name, headerStyle: {backgroundColor: '#000'}, headerTintColor: '#737475'})}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {}
});


