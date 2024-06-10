import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'

/*
Lagerbestandwert + 1
?wert aus anzeige feld Lagerbestand nehmen und +1 erhöhen dann updaten/neu abspeichern

*/


const Plus = (props) => {
  const increase= async()=>{
    try{
      await ausgeben(JSON.parse([data]))
    }
    catch(err){
      console.log(err)
    }
    let updatedata= data + 1
    try{
   await update(JSON.stringify(updatedata))
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <TouchableOpacity onPress={()=>increase()} style={styles.Basic}>
      <Text style={{color:'#fff'}}>+</Text>
    </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  Basic:{
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0ea5e9',
    padding: 9,
    borderRadius:3 
  },

})
export default Plus