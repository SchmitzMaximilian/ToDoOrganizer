import React, { useContext, useEffect, useState } from 'react';
import {TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { speichern } from '../../functions/Services/SecureStorage/functionhandler';
const Einkauffertigknopf = (props) => {
  const fertig=async(props)=>{
    let arr= props.endArray
    let narr=[]
    arr.forEach((e)=>{
      if(e[0]==true&&(Number(e[3])>Number(e[2]))&&(Number(e[4])==0)){ //Nur wenn normal Minimum kleiner als Lager ohne extra
        let b=e
        b[2]=JSON.stringify(Number(e[2])+(Number(e[3])-Number(e[2])));
        b[4]=JSON.stringify(0)
        narr.push(b)
      }else if(e[0]==true&&(Number(e[3])>Number(e[2]))&&(Number(e[4])>0)){ //minimum kleiner als lager + extra
        let b=e
        b[2]=JSON.stringify(Number(e[2])+(Number(e[3])-Number(e[2]))+Number(e[4]));
        b[4]=JSON.stringify(0)
        narr.push(b)
      }else if(e[0]==true&&(Number(e[3])<=Number(e[2]))&&(Number(e[4])>0)){ //Minimum nicht unterschritten + extra
        let b=e
        b[2]=JSON.stringify(Number(e[2])+(Number(e[4])));
        b[4]=JSON.stringify(0)
        narr.push(b)
      }else{  
        e[4]=JSON.stringify(0)
        narr.push(e)
      }
    })
    narr.forEach(element=>element[0]=false)
    try{
      await speichern("Einkaufsliste",JSON.stringify(narr))
      props.refresh(narr)
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
    backgroundColor: '#2563eb',
    padding: 10,
    borderRadius:6,
    borderWidth:2,
    borderColor: '#2563eb',
    marginVertical:10
  },

})
export default Einkauffertigknopf