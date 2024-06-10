import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 

const Minus = (props) => {
  const increase=()=>{
    Lagerbestand.props.Z = Lagerbestand.props.Z - 1
  }
  return (
    <>
    <TouchableOpacity onPress={()=>increase()} style={styles.Basic}>
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