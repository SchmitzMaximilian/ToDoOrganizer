import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import Eingabefeld from '../Rohbau/Eingabefeld'
import { Textdatenset } from '../../Datensets/Textdatenset'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
const AnlegungFood = () => {
  const [Fooddaten,setFooddaten]=useState({Einkaufsliste:[]})
  const addFood= async(param)=>{
  
  }
  return (
  <>
  <Text style={{color:'#fff'}}>Füge dem Vorratslager / der Einkaufsliste einen neuen Artikel hinzu</Text>
          <Eingabefeld storageValue={setFooddaten} Labname={Textdatenset.Feldtexte.Bezeichnung}/>
          <Eingabefeld storageValue={setFooddaten} Labname={Textdatenset.Feldtexte.Stand}/>
          <Eingabefeld storageValue={setFooddaten} Labname={Textdatenset.Feldtexte.Minimum}/>
          <SpeicherButton SDF={addFood}/>
  </>
  )
}

export default AnlegungFood