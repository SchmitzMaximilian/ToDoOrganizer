import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import CheckboxStichpunkt from '../../functions/CheckboxStichpunkt';
import { ausgeben } from '../../functions/Services/SecureStorage/functionhandler';
const Sonstiges = () => {
  const [inhalt,setinhalt]=useState([])
  const name = "Sonstiges"
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
  }

})
export default Sonstiges