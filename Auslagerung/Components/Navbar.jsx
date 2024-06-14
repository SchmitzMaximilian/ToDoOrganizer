import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import ToDoListe from '../../Screens/ToDoListe';
import Vorratslager from '../../Screens/Vorratslager';
import Hinzufügen from '../../Screens/Hinzufügen';
import AddStichpunkt from '../../Screens/AddStichpunkt';
import UpdateSeite from '../../Screens/UpdateSeite';
import UpdateSeiteEinkauf from '../../Screens/UpdateSeiteEinkauf';

const Navbar = (props) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="ToDoListe" screenOptions={{headerShown:false, headerMode:'screen', headerTintColor:'white', headerStyle: {backgroundColor:'rgba(0,15,40,0.95)'}}}>
    <Stack.Screen name = "ToDoListe"                   component = {ToDoListe}  />
    <Stack.Screen name = "Vorratslager"                component = {Vorratslager} options={{headerShown:false}} /> 
    <Stack.Screen name = "Hinzufügen"                  component = {Hinzufügen} options={{headerShown:false}} />
    <Stack.Screen name = "AddStichpunkt"               component = {AddStichpunkt} options={{headerShown:false}} />
    <Stack.Screen name = "UpdateSeiteEinkauf"          component = {UpdateSeiteEinkauf} options={{headerShown:false}} />
    <Stack.Screen name = "UpdateSeite"                 component = {UpdateSeite} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;