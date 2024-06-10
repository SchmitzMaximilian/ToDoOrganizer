import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import CheckboxStichpunkt from '../../functions/CheckboxStichpunkt';
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'

//Secure Storage mapping auslesen und einfügen
const Allgemein = (props) => {
  const lesen = async()=>{
    await ausgeben()
  }
  return (
    <>
    <View>
      <Text>{Beschriftungsdatenset.Kategorienamen[props.Index].Name}</Text>
    {(Beschriftungsdatenset.Kategorienamen[props.Index].Boxen.length>0)&&Beschriftungsdatenset.Kategorienamen[props.Index].Boxen.map((item,index)=>(
      <CheckboxStichpunkt Item={item} />

    ))}
    </View>
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
export default Allgemein