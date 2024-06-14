import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 

const Minus = (props) => {
  const decrease=(props)=>{
    if(props.Zahl>0){
      let newZahl = (props.Zahl - 1)
      console.log(newZahl)

    }else{
      
    }
  }
  return (
    <>
    <TouchableOpacity onPress={()=>decrease(props)} style={styles.Basic}>
      <Text style={{color:'#fff'}}>-</Text>
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
export default Minus