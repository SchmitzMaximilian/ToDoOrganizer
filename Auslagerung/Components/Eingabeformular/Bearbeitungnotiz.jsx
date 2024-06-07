import React, { useState } from 'react'
import KategorieSelect from '../Auswahlpicker/KategorieSelect'
import { Text } from 'react-native'
import Eingabefeld from '../Rohbau/Eingabefeld'
import { Textdatenset } from '../../Datensets/Textdatenset'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'

const Bearbeitungnotiz = () => {
  const [Notizdaten,setNotizdaten]=useState([])
  const updateNotiz= async(param)=>{
   
  }
  return (<>
    <KategorieSelect storageValue={setNotizdaten} Index={1}/>

        <Text style={{color:'#fff'}}>TESTTEST</Text>
        <Eingabefeld Labname={Textdatenset.Feldtexte.ID}/>
        <Eingabefeld Labname={Textdatenset.Feldtexte.STP}/>
        <SpeicherButton SDF={updateNotiz}/>
        </>
  )
}

export default Bearbeitungnotiz