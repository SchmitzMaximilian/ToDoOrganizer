import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet,View} from 'react-native' 
const AuswahlBearbeitung = (props) => {
  const eventHandler1=()=>{
    props.KS(true)
    props.VL(false)
  }
  const eventHandler2=()=>{
    props.VL(true)
    props.KS(false)
  }
  useEffect(()=>{ 
    
  },[props])

  return (
    <>
    <View style={styles.AdminButtonContainer}>
    <TouchableOpacity onPress={()=>eventHandler1()} style={styles.Basic}>
      <Text style={{color:'#fff'}}>Kategorie</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>eventHandler2()} style={styles.Basic}>
      <Text style={{color:'#fff'}}>Lebensmittel</Text>
    </TouchableOpacity></View>
    </>
  )
}
const styles = StyleSheet.create({
  Basic:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#a21caf',
    padding: 10,
    height:'auto',    
    borderRadius:5,
    borderTopColor:'black',
    borderTopWidth:2,
    borderBottomColor:'black',
    borderBottomWidth:2,
    borderLeftColor:'black',
    borderLeftWidth:2,
    borderRightColor:'black',
    borderRightWidth:2,
    width:'25%',
    flex: 1,
    marginHorizontal:5,      
    marginVertical: 30,      
  },
  AdminButtonContainer:{
    width:'100%', 
    padding:15, 
    flexDirection:'row', 
  },

})
export default AuswahlBearbeitung