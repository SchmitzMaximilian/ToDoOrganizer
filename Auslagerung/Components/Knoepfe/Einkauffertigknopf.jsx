import React, { useContext, useEffect, useState } from 'react';
import {TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { speichern } from '../../functions/Services/SecureStorage/functionhandler';

/*


*/
const Einkauffertigknopf = (props) => {

  const fertig=async(props)=>{
    let arr= props.endArray
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

  return (
    <>
    <TouchableOpacity onPress={()=>{fertig(props)}} style={styles.Basic}>
      <Text style={{color:'#fff'}}>Einkauf abschließen</Text>
    </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  Basic:{
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0ea5e9',
    padding: 10,
    borderRadius:6,
    borderWidth:2,
    borderColor: '#0ea5e9',
  },

})
export default Einkauffertigknopf