import React, { useState,useEffect } from 'react'
import { SafeAreaView, Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import { Textdatenset } from '../../Datensets/Textdatenset'
import EingabefeldNotiz from '../Eingabefelder/EingabefeldNotiz'
import KategorieSelect from '../Auswahlpicker/KategorieSelect'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
const Anlegungnotiz = () => {
  const [selectIndex,setselectIndex]=useState(0)
  const [ThemaKey,setThemaKey]=useState("")
  const [katvalue,setkatvalue]=useState(0)  
  const [placeholderreset,setplaceholderreset]=useState(false)
  const selectKat= async(key)=>{
    let name
    setkatvalue(key)
    if(key>0){
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
    setThemaKey(name)
   const data = await ausgeben(name)
   let index=JSON.parse(data).length
   setselectIndex(index)
   let darr=JSON.parse(data)
   darr.push([false,""]);
   const dataSpeichern = await speichern(name,JSON.stringify(darr))   
   setplaceholderreset(true)
  }else{
    
   }
  }

  
  useEffect(()=>{
    
    },[ThemaKey,selectIndex])
  return (
  <>
    <Text style={{color:'#fff'}}>Lege einen neuen Notizstichpunkt an</Text>
    <KategorieSelect storageValue={selectKat} Index={1}/>
    <EingabefeldNotiz TK={ThemaKey} SI={selectIndex} Labname={Textdatenset.Feldtexte.STP} P={placeholderreset} PF={setplaceholderreset}/>
    <TouchableOpacity onPress={()=>selectKat(katvalue)} style={styles.next}>
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
export default Anlegungnotiz