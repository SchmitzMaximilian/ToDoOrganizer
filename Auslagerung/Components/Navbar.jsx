import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import ToDoListe from '../../Screens/ToDoListe';
import Vorratslager from '../../Screens/Vorratslager';
import Hinzufügen from '../../Screens/Hinzufügen';
import AddStichpunkt from '../../Screens/AddStichpunkt';
import Einkauf from '../../Screens/Einkauf';

const Navbar = (props) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="ToDoListe" screenOptions={{headerShown:false, headerMode:'screen', headerTintColor:'white', headerStyle: {backgroundColor:'rgba(0,15,40,0.95)'}}}>
    <Stack.Screen name = "ToDoListe"                   component = {ToDoListe}  />
    <Stack.Screen name = "Vorratslager"                component = {Vorratslager} options={{headerShown:false}} />
    <Stack.Screen name = "Einkauf"                     component = {Einkauf} options={{headerShown:false}} /> 
    <Stack.Screen name = "Hinzufügen"                  component = {Hinzufügen} options={{headerShown:false}} />
    <Stack.Screen name = "AddStichpunkt"               component = {AddStichpunkt} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;