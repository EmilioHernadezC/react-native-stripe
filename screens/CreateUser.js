import React, {useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from '../database/firebase';

const CreateUser = (props) => {
    const [state, setState] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const handleChangeText = (nombre, value) =>{
        setState({...state, [nombre]: value})
    }

    const saveNewUSer = async () => {
        if (state.nombre === ''){
            alert('Por favor inresa un nombre');
        }else {
            try{
                await firebase.bd.collection('usuario').add({               
                    nombre: state.nombre,
                    email: state.email,
                    telefono: state.telefono
                })
                props.navigation.navigate('Lista Usuarios');
            }catch(error){
                console.log(error);
            }            
        }
    }

    return (
      <ScrollView style = {styles.container}>
          <View styles = {styles.InputGroup}>
              <TextInput placeholder = "Nombre de usuario" 
              onChangeText = {(value) => handleChangeText('nombre', value)}
              />
          </View>
          <View styles = {styles.InputGroup}>
              <TextInput placeholder = "Email"
              onChangeText = {(value) => handleChangeText('email', value)}
              />
          </View>
          <View styles = {styles.InputGroup}>
              <TextInput placeholder = "Telefono" 
              onChangeText = {(value) => handleChangeText('telefono', value)}
              />
          </View>
          <View>
              <Button title = "Guardar usuario" onPress = {() => saveNewUSer()} />
          </View>
      </ScrollView>  
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },

    InputGroup:{
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
});

export default CreateUser