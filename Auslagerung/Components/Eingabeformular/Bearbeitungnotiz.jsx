import React, { useState,useEffect } from 'react'
import KategorieSelect from '../Auswahlpicker/KategorieSelect'
import { Text } from 'react-native'
import Eingabefeld from '../Rohbau/Eingabefeld'
import { Textdatenset } from '../../Datensets/Textdatenset'
import SpeicherButton from '../Knöpfe/speicherknopf'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import NBS from '../Auswahlpicker/NotizBearbeitungSelect'
import EingabeAuswahlDatenset from '../Eingabefelder/EingabeAuswahlDatenset'
import EingabeUpdate from '../Eingabefelder/EingabeUpdate'
import STPListe from '../Bearbeitung/STPListe'

/*

<EingabeAuswahlDatenset Labname={Textdatenset.Feldtexte.ID}/>
        
        <EingabeUpdate Labname={Textdatenset.Feldtexte.STP}/>

*/


const Bearbeitungnotiz = (props) => {
  const [THEMA,setTHEMA]=useState([])
  const [Arrayname,setArrayname]=useState()
  const auswahlAnzeige= async(key)=>{
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
     case 8:
      name= "Einkaufsliste"
      break;
     default:
       name= "null"
       break;
    } 
    const data = await ausgeben(name)
    setArrayname(name)
    setTHEMA(JSON.parse(data))
  }

  useEffect(()=>{
    
  },[THEMA])
  return (<>
    <NBS storageValue={auswahlAnzeige} Index={2}/>
    {
      THEMA?.length>0?
      <>
      <STPListe Arr={THEMA} navigation={props.navigation} function={auswahlAnzeige} Arrayname={Arrayname}/>
      </>
      :
      ""
    }
        </>
  )
}

export default Bearbeitungnotiz