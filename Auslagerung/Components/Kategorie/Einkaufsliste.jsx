import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import CheckboxStichpunkt from '../../functions/CheckboxStichpunkt';
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import CheckboxEinkauf from '../../functions/CheckboxEinkauf';
import Einkauffertigcheck from '../../functions/Einkauffertigcheck';
import Einkauffertigknopf from '../Knoepfe/Einkauffertigknopf';

//Secure Storage mapping auslesen und einfügen
/*
setinhalt(JSON.parse(data))
let index=JSON.parse(data).length


*/
const Einkaufsliste = (props) => {
  const [inhalt,setinhalt]=useState([])
  const [id, setID] = useState(0)
  const name = "Einkaufsliste"
  console.log("prüfung")
  console.log(inhalt)
  const randKey = () =>{
    setID(Math.random())
  }
  const lesen = async()=>{    
    const data = await ausgeben(name)
    if(data){
      setinhalt(JSON.parse(data))
      console.log(data)
    }
    
  }
  useEffect(()=>{
  lesen()
  },[])
  return (
    
    <View key={id} style={styles.Kat}>    
    <Text style={{color:'#fff',fontSize:20,alignSelf:'center'}}>Einkaufsliste</Text>
    
    
    {
      inhalt?.length>0?
      <View style={styles.stpliste}>
      {inhalt.length>0&&inhalt.map((item,index)=>(
      <CheckboxEinkauf key={item+index} OBJN={name} endArray={inhalt} Item={item} Index={index}/>
      
    ))
    }  
    
    </View>
      :
      ""
    }
       <Einkauffertigknopf refresh={(neuesArray)=>{randKey(), setinhalt([...neuesArray])}} endArray={inhalt}/>
    
    </View>
  )
}
  
  
const styles = StyleSheet.create({
  stpliste:{padding:5,
    borderTopWidth:2,
    borderTopColor:"black",
    alignSelf:"stretch",
    backgroundColor:"#d946ef"
  },
  Thema:{
    color:'#fff',
    alignSelf:'center'
  },
  Kat:{
    flex:1,
    backgroundColor: 'gray',
    alignItems:'flex-start',
    borderWidth:2,
    borderColor:"black",
  },
  row:{
    flexDirection:'row',
  }

})
export default Einkaufsliste