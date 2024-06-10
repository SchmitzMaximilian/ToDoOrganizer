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
}<SpeicherButton SDF={addNotiz}/>
   
    console.log('gespeichert')
  kat=Kategorie(Keyvalue)
  Notizdaten=Stichpunktname(Valuevalue)
  Checkbox anfangsstatus ist false ?wie mit abspeichern?
*/
const Anlegungnotiz = () => {
  const [Katindex,setKatindex]=useState()

  const selectKat= async()=>{
    console.log(key)
    await ausgeben(key)
    setKatindex(key)
  }


  const addNotiz= async(Katindex)=>{
    console.log(Katindex)
    Katindex.push([])
    await speichern(Katindex,JSON.stringify(false,Notizdaten))

  }


  
  

  return (
  <>
    <Text style={{color:'#fff'}}>Lege einen neuen Notizstichpunkt an</Text>
    <KategorieSelect storageValue={selectKat} Index={1}/>
    <Eingabefeld storageValue={addNotiz} Labname={Textdatenset.Feldtexte.STP}/>
    
  </>
  )
}

export default Anlegungnotiz