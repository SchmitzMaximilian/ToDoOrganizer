import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import Hausarbeit from '../Kategorie/Hausarbeit';
import Allgemein from '../Kategorie/Allgemein';
import Termine from '../Kategorie/Termine';
import Sonstiges from '../Kategorie/Sonstiges';
import Formulare from '../Kategorie/Formulare';
import Reisecheckliste from '../Kategorie/Reisecheckliste';
import Geburtstage from '../Kategorie/Geburtstage';
const HülleKategorie = () => {
  return (
  <>  
  <View style={styles.thema}>
    <View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Allgemein</Text>
  <Allgemein id={1} />
  </View><View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Hausarbeiten</Text> 
   <Hausarbeit  id={1}   />
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Termine</Text>
  <Termine id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Geburtstage</Text>
  <Geburtstage id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Reisecheckliste</Text>
  <Reisecheckliste id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Formulare</Text>
  <Formulare id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff',paddingBottom:5,paddingTop:5,fontSize:18}}>Sonstiges</Text>
  <Sonstiges id={1}/>
  </View>

  </View>
    </>
  )
}
const styles = StyleSheet.create({
  thema:{flexDirection:'column',
    gap:10,
    flex:8,
    alignContent:'center',
    paddingHorizontal:'11%',
    paddingTop:10
  },
  Kat:{
    flex:1,
    backgroundColor: 'gray',
    alignItems:'center',
    borderWidth:2,
    borderColor:"black",
  },
  placeholder:{

  },
})
export default HülleKategorie