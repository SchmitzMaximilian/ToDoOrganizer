import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { speichern, update } from './Services/SecureStorage/functionhandler';

/*

*/
export default function Einkauffertigcheck(props) {
  const [erledigt, seterledigt] = useState(false)
  const clickhandler=async(itemValue)=>{
    seterledigt(itemValue)
    let arr= [...props.endArray]
    arr.forEach(element=>element[0]=false)
    console.log(arr)
    try{
      await speichern("Einkaufsliste",JSON.stringify(arr))
      props.refresh(arr)
      console.log("did it")
    }catch(err){
      console.log(err)
    }
    
    
  }
  return( 
    <View style={styles.checkboxContainer}>
    <CheckBox
      value={erledigt?true:false}
      onValueChange={(itemValue) =>clickhandler(itemValue) }
      style={styles.checkbox}
      /><Text style={styles.beschreibung}>Einkauf abgeschlossen</Text>
      </View >         
        
        
);   



}
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    padding:'3%'
  },
  beschreibung: {
    marginLeft: '3%',
    fontSize: 13,
    color:'#fff'
  },


})