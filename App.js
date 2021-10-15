import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersList from './screens/UsersList';
import UserDetail from './screens/UserDetail';
import CreateUser from './screens/CreateUser';


const Stack = createStackNavigator();

function Mystack(){
  return(
    <Stack.Navigator>    
      <Stack.Screen name ="Lista Usuarios" component = {UsersList}/>
      <Stack.Screen name ="Crear Usuario" component = {CreateUser}/>      
      <Stack.Screen  name ="UserDetail" component = {UserDetail}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
