import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'

/*

*/


const Plus = (props) => {
  const increase= async(props)=>{
    let count=JSON.parse(props.Zahl)
    count=((count + 1))
    const data = await ausgeben("Einkaufsliste")
    if(data){
    let arr=JSON.parse(data)
    arr[props.id][2]=JSON.stringify(count)
    try{
      await update("Einkaufsliste",JSON.stringify(arr))
      props.refresh(arr)
       }catch(err){
         console.log(err)
       }
    }
  }
  return (
    <>
    <TouchableOpacity onPress={()=>{increase(props)}} style={styles.Basic}>
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
    padding: 10,
    borderRadius:6,
    borderWidth:2,
    borderColor: '#0ea5e9', 
  },

})
export default Plus