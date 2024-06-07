import React, { useState } from 'react'
import KategorieSelect from '../Auswahlpicker/KategorieSelect'
import { Text } from 'react-native'
import Eingabefeld from '../Rohbau/Eingabefeld'
import { Textdatenset } from '../../Datensets/Textdatenset'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'

const BearbeitungFood = () => {
  const [Fooddaten,setFooddaten]=useState([])
  const updateFood= async(param)=>{
   
  }
  return (<>
  <KategorieSelect storageValue={setFooddaten} Index={0}/>

<Text style={{color:'#fff'}}>Vorratslager</Text>
<Eingabefeld Labname={Textdatenset.Feldtexte.ID}/>
<Eingabefeld Labname={Textdatenset.Feldtexte.Bezeichnung}/>
<Eingabefeld Labname={Textdatenset.Feldtexte.Stand}/>
<Eingabefeld Labname={Textdatenset.Feldtexte.Minimum}/>
<SpeicherButton SDF={updateFood}/>
  </>
  )
}

export default BearbeitungFood