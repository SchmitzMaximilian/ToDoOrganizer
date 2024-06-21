import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native' 
import HülleKategorie from './Rohbau/HülleKategorie'

const TitelTouch = (props) => {
  return (
   <>
    {
      props.show==props.V?
    <> 
      <TouchableOpacity onPress={()=>props.setshow(!props.V)}>
        <Text style={styles().Ueberschrift2pressed}>{props.T}</Text>
      </TouchableOpacity>
      <HülleKategorie/>
      
    </>
    :
    
    <TouchableOpacity onPress={()=>props.setshow(props.V)}>
      <Text style={styles().Ueberschrift}>{props.T}</Text>
    </TouchableOpacity>
    
    
    }   
   </>
  )
}
const styles=()=>StyleSheet.create({
  Ueberschrift: {
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#6b7280',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom:10,
    color:'#fff',
    fontSize:20
    
  },
  Ueberschrift2pressed: {
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#0ea5e9',
    borderWidth: 1,
    textAlign: 'center',
    fontSize:20
    
  },
  
  
})
export default TitelTouch