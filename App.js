import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Auslagerung/Components/Navbar';
import { speichern,ausgeben,löschen,update} from './Auslagerung/functions/Services/SecureStorage/functionhandler'

//setersteabfrage=false
//setersteeinkaufabfrage=false
/**

    await löschen('ersteabfrage')
    await löschen('Allgemein')
    await löschen('Formulare')
    await löschen('Geburtstage')
    await löschen('Hausarbeiten')
    await löschen('Reisecheckliste')
    await löschen('Sonstiges')
    await löschen('Termine')
    await löschen('Einkaufsliste')


 */
export default function App() {
  const startup= async()=>{
    
    const data= await ausgeben("ersteabfrage")
    console.log(data)
    if (data==null || data==undefined){
      const data1=await speichern("ersteabfrage","true") 
      const data2=await speichern("Allgemein",JSON.stringify([]))
      const data3=await speichern("Formulare",JSON.stringify([]))
      const data4=await speichern("Geburtstage",JSON.stringify([]))
      const data5=await speichern("Hausarbeiten",JSON.stringify([]))
      const data6=await speichern("Reisecheckliste",JSON.stringify([]))
      const data7=await speichern("Sonstiges",JSON.stringify([]))
      const data8=await speichern("Termine",JSON.stringify([]))
      const data9=await speichern("Einkaufsliste",JSON.stringify([]))
      
      if((data1)&&(data2)&&(data3)&&(data4)&&(data5)&&(data6)&&(data7)&&(data8)&&(data9)){
        console.log('ok')
      }
    }else{
      
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
