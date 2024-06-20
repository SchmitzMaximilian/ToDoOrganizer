import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import CheckboxStichpunkt from '../../functions/CheckboxStichpunkt';
import { ausgeben } from '../../functions/Services/SecureStorage/functionhandler';
const Termine = () => {
  const [inhalt,setinhalt]=useState([])
  const name = "Termine"
  const lesen = async()=>{    
    const data = await ausgeben(name)
    if(data){
      setinhalt(JSON.parse(data))
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
      <CheckboxStichpunkt key={item+index} OBJN={name} endArray={inhalt} Item={item} Index={index}/>
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
    backgroundColor:"#c026d3"
  }

})
export default Termine