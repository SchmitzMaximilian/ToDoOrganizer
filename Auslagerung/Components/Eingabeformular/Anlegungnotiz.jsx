import React, { useState,useEffect } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { Textdatenset } from '../../Datensets/Textdatenset'
import EingabefeldNotiz from '../Eingabefelder/EingabefeldNotiz'
import KategorieSelect from '../Auswahlpicker/KategorieSelect'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
/*
  const testschreiben=async(key)=>{
    const data = await ausgeben(key)
    if(data){
    let arr=JSON.parse(data)
    arr[selectIndex][1]="test"
    const dataSpeichern = await speichern(key,JSON.stringify(arr))
    if(dataSpeichern){
    const datatest = await ausgeben(key)
    
     console.log(datatest)}
    }
    
  }

*/
const Anlegungnotiz = () => {
  const [selectIndex,setselectIndex]=useState(0)
  const [ThemaKey,setThemaKey]=useState("")
  const selectKat= async(key)=>{
    console.log("#################  Neuer Log ##########################")
    console.log(key)
    let name
    switch(key){
    case 1: 
     name= "Allgemein"
     break;
     case 2: 
     name= "Formulare"
     break;
     case 3: 
     name= "Geburtstage"
     break;
     case 4: 
     name= "Hausarbeiten"
     break;
     case 5: 
     name= "Reisecheckliste"
     break;
     case 6: 
     name= "Sonstiges"
     break;
     case 7: 
     name= "Termine"
     break;
     default:
       name= "null"
       break;
    } 
    console.log(name)
    console.log("#######")
    setThemaKey(name)
    console.log("TK " + ThemaKey)
   const data = await ausgeben(name)
   console.log(data)
   let index=JSON.parse(data).length
   console.log("#######+")
   console.log(index)
   console.log("#######-")
   setselectIndex(index)
   console.log("SI " + selectIndex)
   let darr=JSON.parse(data)
   darr.push([false,""]);
   const dataSpeichern = await speichern(name,JSON.stringify(darr))
   console.log("Problem")
   console.log(dataSpeichern)
  }

  
  useEffect(()=>{
    
    },[ThemaKey,selectIndex])
  return (
  <>
    <Text style={{color:'#fff'}}>Lege einen neuen Notizstichpunkt an</Text>
    <KategorieSelect storageValue={selectKat} Index={1}/>
    <EingabefeldNotiz TK={ThemaKey} SI={selectIndex} Labname={Textdatenset.Feldtexte.STP}/>
  </>
  )
}

export default Anlegungnotiz