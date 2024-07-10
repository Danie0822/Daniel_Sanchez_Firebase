import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, createUserWithEmailAndPassword } from '../config/Firebase';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomFlecha from '../components/CustomFlecha';
const Registro = ({ navigation }) => {
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");

    const handleRegistro = () => {
        if (correo.trim() === "" || contra.trim() === "") {
            alert("Asegúrese de ingresar todos los campos");
        } else {
            createUserWithEmailAndPassword(auth, correo, contra)
                .then((userCredential) => {
                    alert("Usuario registrado correctamente");
                })
                .catch((error) => {
                    console.log(error);
                    alert(`Error: ${error.message}`);
                });
        }
    }
     
    return (
        <View style={styles.container}>
            <CustomFlecha />
            <Text style={styles.title}>Registro</Text>
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
            <CustomButton text="Registrarse" onPress={handleRegistro} />
            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                <Text style={styles.register}>Ya tienes una cuenta? <Text style={styles.registerLink}>Inicia sesión</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

export default Registro;

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
