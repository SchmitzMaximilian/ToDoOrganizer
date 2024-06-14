import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import EingabefeldFood from '../Eingabefelder/EingabeFood/EingabefeldFood'
import { Textdatenset } from '../../Datensets/Textdatenset'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import EingabefeldBestand from '../Eingabefelder/EingabeFood/EingabefeldBestand'
import EingabefeldMinimum from '../Eingabefelder/EingabeFood/EingabefeldMinimum'

//addFood() bei useEffect?
         // 
//console.log()
const AnlegungFood = () => {
    const [selectIndex,setselectIndex]=useState(0)
  const addFood= async()=>{
    let name = "Einkaufsliste"
    const data = await ausgeben(name)
    console.log(data)
     let index =JSON.parse(data).length
     setselectIndex(index)
     let ekarr=JSON.parse(data)
     ekarr.push([false,"","",""]);
   const EinkaufSpeichern =await speichern(name,JSON.stringify(ekarr))
  }
  useEffect(()=>{
    selectIndex==0?addFood():""
  },[selectIndex])
  return (
  <>
  <Text style={{color:'#fff'}}>Füge dem Vorratslager / der Einkaufsliste einen neuen Artikel hinzu</Text>
          <EingabefeldFood    option={1} TK={"Einkaufsliste"} SI={selectIndex} Labname={Textdatenset.Feldtexte.Bezeichnung}/>
          <EingabefeldBestand option={2} TK={"Einkaufsliste"} SI={selectIndex} Labname={Textdatenset.Feldtexte.Stand}/>
          <EingabefeldMinimum option={3} TK={"Einkaufsliste"} SI={selectIndex} Labname={Textdatenset.Feldtexte.Minimum}/>
  </>
  )
}
// Für eingabe feld switch case des labnamen um array leerstellen befüllung festzulegen
export default AnlegungFood