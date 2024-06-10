import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Auslagerung/Components/Navbar';
import { speichern,ausgeben,löschen,update} from './Auslagerung/functions/Services/SecureStorage/functionhandler'

//setersteabfrage=false
//setersteeinkaufabfrage=false
/**

einkaufstartup()
const einkaufstartup=async()=>{
    const lagerdata= await ausgeben(ersteeinkaufabfrage)
    if (data==null || data==undefined){
      
    }
  }


 */
export default function App() {
  const startup= async()=>{
    
    const data= await ausgeben("ersteabfrage")
    console.log(data)
    if (data==null || data==undefined){
      speichern("ersteabfrage","true") 
      speichern("Allgemein",JSON.stringify([]))
      speichern("Formulare",JSON.stringify([]))
      speichern("Geburtstage",JSON.stringify([]))
      speichern("Hausarbeit",JSON.stringify([]))
      speichern("Reisecheckliste",JSON.stringify([]))
      speichern("Sonstieges",JSON.stringify([]))
      speichern("Termine",JSON.stringify([]))
      speichern("Einkaufsliste",JSON.stringify([]))
    }else{
      speichern("ersteabfrage","false")
    }
  }
  
  useEffect(()=>{
    startup()
    
  },[])
  return (
    <Navbar />
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
