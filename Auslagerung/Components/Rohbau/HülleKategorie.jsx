import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import Hausarbeit from '../Kategorie/Hausarbeit';
import KategorieSelect from '../Auswahlpicker/KategorieSelect';
import Allgemein from '../Kategorie/Allgemein';
import Termine from '../Kategorie/Termine';
import Sonstiges from '../Kategorie/Sonstiges';
import Formulare from '../Kategorie/Formulare';
import Reisecheckliste from '../Kategorie/Reisecheckliste';
import Geburtstage from '../Kategorie/Geburtstage';
const HülleKategorie = (props) => {
  return (
  <>  
  <View style={styles.thema}>
    <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Allgemein</Text>
  
  </View><View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Hausarbeiten</Text> 
   <Hausarbeit     />
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Einkaufsliste</Text>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Termine</Text>
  <Termine />
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Geburtstage</Text>
  <Geburtstage />
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Reisecheckliste</Text>
  <Reisecheckliste />
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Formulare</Text>
  <Formulare />
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Sonstiges</Text>
  <Sonstiges />
  </View>

  </View>
    {/*
    
    <Allgemein  />
    <Sonstiges />
    <Geburtstage      Index={5} />
    <Formulare        Index={6} />
  <Reisecheckliste  Index={7} />*/}</>
  )
}
const styles = StyleSheet.create({
  thema:{flexDirection:'column',
    gap:10,
    flex:8,
    alignContent:'center',
    paddingHorizontal:'11%'
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