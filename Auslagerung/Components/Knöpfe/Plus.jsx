import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 

const Plus = (props) => {
  const increase=()=>{
    Lagerbestand.props.Z = Lagerbestand.props.Z + 1
  }
  return (
    <>
    <TouchableOpacity onPress={()=>increase()} style={styles.Basic}>
      <Text style={styles.Basic}>+</Text>
    </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  Basic:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    padding: 10,
    height:'auto',    
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%',
    marginHorizontal: '10%',      
    marginVertical: 30,      
  },

})
export default Plus