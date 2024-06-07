import React, { useEffect, useState } from 'react'
import {TouchableOpacity, Text, StyleSheet,View} from 'react-native' 

const Navknopf = ({navigation}) => {
  
  return (
    <><View style={styles.AdminButtonContainer}>
    <TouchableOpacity onPress={()=>navigation.navigate({name:"ToDoListe"})} style={styles.Basic}>
      <Text style={{color:'#fff'}}>ToDoListe</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate({name:"Vorratslager"})} style={styles.Basic}>
      <Text style={{color:'#fff'}}>Vorratslager</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate({name:"Hinzufügen"})} style={styles.Basic}>
      <Text style={{color:'#fff'}}>Neu Anlegen</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate({name:"AddStichpunkt"})} style={styles.Basic}>
      <Text style={{color:'#fff'}}>Bearbeiten</Text>
    </TouchableOpacity>
    </View></>
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
    marginVertical: 20,      
  },
  AdminButtonContainer:{
    width:'100%', 
    padding:15, 
    flexDirection:'row', 
  },

})
export default Navknopf