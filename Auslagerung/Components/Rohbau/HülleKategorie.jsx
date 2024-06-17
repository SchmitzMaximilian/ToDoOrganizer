import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import Hausarbeit from '../Kategorie/Hausarbeit';
import Allgemein from '../Kategorie/Allgemein';
import Termine from '../Kategorie/Termine';
import Sonstiges from '../Kategorie/Sonstiges';
import Formulare from '../Kategorie/Formulare';
import Reisecheckliste from '../Kategorie/Reisecheckliste';
import Geburtstage from '../Kategorie/Geburtstage';
import Einkaufsliste from '../Kategorie/Einkaufsliste';

/*
<View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Einkaufsliste</Text>
  <Einkaufsliste id={1}/>
  </View>

*/
const HülleKategorie = () => {
  return (
  <>  
  <View style={styles.thema}>
    <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Allgemein</Text>
  <Allgemein id={1} />
  </View><View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Hausarbeiten</Text> 
   <Hausarbeit  id={1}   />
  </View>
  
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Termine</Text>
  <Termine id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Geburtstage</Text>
  <Geburtstage id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Reisecheckliste</Text>
  <Reisecheckliste id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Formulare</Text>
  <Formulare id={1}/>
  </View>
  <View style={styles.Kat}>
  <Text style={{color:'#fff'}}>Sonstiges</Text>
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