import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { speichern, update } from './Services/SecureStorage/functionhandler';

/*

*/
export default function CheckboxStichpunkt(props) {
  const [erledigt, seterledigt] = useState(props.Item[0])
  const clickhandler=async(itemValue)=>{
    seterledigt(itemValue)
    
      let arr= props.endArray
      arr[props.Index][0]=itemValue
      console.log(arr)
      
      try{
        console.log("I tried")
        const newArr= await speichern(props.OBJN,JSON.stringify(arr))        
        console.log(newArr)
        
        
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
      /><Text style={styles.beschreibung}>{props.Item[1]}</Text>
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