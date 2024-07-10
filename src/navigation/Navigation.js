import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Add from '../screens/Add';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
                <Stack.Screen name="Add" component={Add} options={{ title: 'Agregar productos', headerShown: false }} />
                <Stack.Screen name="Registro" component={Register} options={{ title: 'Registro', headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
