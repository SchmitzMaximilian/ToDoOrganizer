import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import CheckboxStichpunkt from '../../functions/CheckboxStichpunkt';
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'

//Secure Storage mapping auslesen und einfügen
/*
setinhalt(JSON.parse(data))
let index=JSON.parse(data).length


*/
const Allgemein = () => {
  const [inhalt,setinhalt]=useState([])
  const name = "Allgemein"
  console.log(inhalt)
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
    <>
    
      {inhalt.length>0?
      <View style={styles.stpliste}>
      {inhalt.length>0&&inhalt.map((item,index)=>(
      <CheckboxStichpunkt Key={item+index} OBJN={name} endArray={inhalt} Item={item} Index={index}/>
    ))}  
    
    </View>
      :
      ""
    }
    
    
    </>
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
  }

})
export default Allgemein