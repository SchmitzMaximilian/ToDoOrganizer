import React, { useState,useEffect } from 'react'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import NBS from '../Auswahlpicker/NotizBearbeitungSelect'
import STPListe from '../Bearbeitung/STPListe'
import { useFocusEffect } from '@react-navigation/native';
const Bearbeitungnotiz = (props) => {
  const [THEMA,setTHEMA]=useState([])
  const [Arrayname,setArrayname]=useState("Kategorie Auswählen")
  const [ThemaIndex,setThemaIndex]=useState(0)
  const auswahlAnzeige= async(key)=>{
    let name
    setThemaIndex(key)
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
     case 8:
      name= "Einkaufsliste"
      break;
     default:
       name= "Kategorie Auswählen"
       break;
    }
    setArrayname(name)    
    const data = await ausgeben(name)
    setTHEMA(JSON.parse(data))
  }else if(key==0){
  setArrayname("Kategorie Auswählen")
  setTHEMA([])
}else{
  setArrayname(Arrayname)
}
  }

  const updateAnzeige =async()=>{
    if(Arrayname!="Kategorie Auswählen"){
    const newdata = await ausgeben(Arrayname)
    setTHEMA(JSON.parse(newdata))
  }
  else{
    setTHEMA([])
  }

  }
  useFocusEffect(React.useCallback(()=>{
    updateAnzeige(Arrayname)
  },[Arrayname]))
  return (<>
    
    
    <NBS storageValue={auswahlAnzeige} Auswahl={0} Index={2}/>
    {
      THEMA?.length>0?
      <>
      <STPListe Arr={THEMA} navigation={props.navigation} function={updateAnzeige} TI={ThemaIndex} ArrayN={Arrayname}/>
      </>
      :
      ""
    }
        </>
  )
}

export default Bearbeitungnotiz