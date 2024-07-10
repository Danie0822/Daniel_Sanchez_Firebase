import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, signInWithEmailAndPassword } from '../config/Firebase';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");
    // Verificar si el usuario ya inició sesión
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home");
            }
        });
        return () => unsubscribe();
    }, [navigation]);
    // Función para iniciar sesión
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, correo, contra)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const goToRegistro = () => {
        navigation.navigate('Registro');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <CustomTextInput
                placeholder="Correo"
                keyboardType="email-address"
                onChangeText={text => setCorreo(text)}
                value={correo} 
            />
           <CustomTextInput
                placeholder="Contraseña"
                secureTextEntry
                value={contra}
                onChangeText={text => setContra(text)}
            />
            <CustomButton text="Iniciar sesión" onPress={handleLogin} />
            <TouchableOpacity onPress={goToRegistro}>
                <Text style={styles.register}>No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text></Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 95,
        alignSelf: 'flex-start',
        marginLeft: 10,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    registerLink: {
        alignSelf: 'flex-start',
        color: '#000000',
        fontWeight: 'bold',
    },
});
