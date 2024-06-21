import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import EingabefeldFood from '../Eingabefelder/EingabeFood/EingabefeldFood'
import { Textdatenset } from '../../Datensets/Textdatenset'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import EingabefeldBestand from '../Eingabefelder/EingabeFood/EingabefeldBestand'
import EingabefeldMinimum from '../Eingabefelder/EingabeFood/EingabefeldMinimum'
const AnlegungFood = () => {
    const [selectIndex,setselectIndex]=useState(0)
    const [placeholderreset,setplaceholderreset]=useState(false)
  const addFood= async()=>{
    let name = "Einkaufsliste"
    const data = await ausgeben(name)
     let index =JSON.parse(data).length
     setselectIndex(index)
     let ekarr=JSON.parse(data)
     ekarr.push([false,"","0","0","0"]);
   const EinkaufSpeichern =await speichern(name,JSON.stringify(ekarr))
   setplaceholderreset(true)
  }
  useEffect(()=>{
    selectIndex==0?addFood():""
  },[selectIndex])
  return (
  <>
  <Text style={{color:'#fff'}}>Füge dem Vorratslager / der Einkaufsliste einen neuen Artikel hinzu</Text>
          <EingabefeldFood    option={1} TK={"Einkaufsliste"} SI={selectIndex} Labname={Textdatenset.Feldtexte.Bezeichnung} P={placeholderreset} PF={setplaceholderreset}/>
          <EingabefeldBestand option={2} TK={"Einkaufsliste"} SI={selectIndex} Labname={Textdatenset.Feldtexte.Stand} P={placeholderreset} PF={setplaceholderreset}/>
          <EingabefeldMinimum option={3} TK={"Einkaufsliste"} SI={selectIndex} Labname={Textdatenset.Feldtexte.Minimum} P={placeholderreset} PF={setplaceholderreset}/>
          <TouchableOpacity onPress={()=>addFood()} style={styles.next}>
          <Text style={{color:'#fff'}}>Neu</Text>
          </TouchableOpacity>
  </>
  )
}
const styles = StyleSheet.create({
  next:{
    alignSelf:'flex-end',
    backgroundColor: '#2563eb',
    alignItems:'center',
    marginRight:'10%',
    borderRadius:6,
    borderWidth:2,
    borderColor: '#2563eb',
    padding:10,
    marginTop:10
  },})
export default AnlegungFood