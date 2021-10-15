import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'


const UsersList = (props) => {

    const [usuario, setUser] = useState([])

    useEffect(() => {
        firebase.bd.collection('usuario').onSnapshot((querySnapshot) => {
            const usuario = [];
            
            querySnapshot.docs.forEach((doc) =>{
                const {nombre, email, telefono} = doc.data()
                usuario.push({
                    id: doc.id,
                    nombre,
                    email,
                    telefono
                })
            });

            setUser(usuario)
        });
    }, []);

    return (
        <ScrollView>
            <Button title = "Crear usuario" 
            onPress = {() => props.navigation.navigate('Crear Usuario')}/>
        </ScrollView>
    );
};

export default UsersList;
