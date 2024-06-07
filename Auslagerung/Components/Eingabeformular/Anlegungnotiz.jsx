import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { Textdatenset } from '../../Datensets/Textdatenset'
import Eingabefeld from '../Rohbau/Eingabefeld'
import KategorieSelect from '../Auswahlpicker/KategorieSelect'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
/*
  async function speichern(param){
  const data= await SecureStore.setItemAsync(param);
  return data;
}
  
  
*/
const Anlegungnotiz = () => {
  const [Notizdaten,setNotizdaten]=useState([])
  const [kat,setkat]=useState()
  const addNotiz= async()=>{
    await speichern(kat,Notizdaten) 
    console.log('gespeichert')

  }
  return (
  <>
    <Text style={{color:'#fff'}}>Lege einen neuen Notizstichpunkt an</Text>
    <KategorieSelect storageValue={setkat} Index={1}/>
    <Eingabefeld storageValue={setNotizdaten} Labname={Textdatenset.Feldtexte.STP}/>
    <SpeicherButton SDF={addNotiz}/>
  </>
  )
}

export default Anlegungnotiz