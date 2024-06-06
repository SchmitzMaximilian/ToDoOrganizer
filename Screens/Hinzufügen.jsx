import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import {ScrollView } from 'react-native-gesture-handler'
import Eingabefeld from '../Auslagerung/Components/Rohbau/Eingabefeld'
import KategorieSelect from '../Auslagerung/Components/Auswahlpicker/KategorieSelect'
import Navknopf from '../Auslagerung/Components/Knöpfe/Navknopf'
import { Textdatenset } from '../Auslagerung/Datensets/Textdatenset'
//import * as SecureStore from 'expo-secure-store'
/*
<KategorieSelect Index={1}/>
        
        


*/
const Hinzufügen = (props) => {
  return (
    <>
    <SafeAreaView style={styles.sav}>    
    
      <Navknopf navigation={props.navigation} />
      
    
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <Text style={{color:'#fff'}}>TESTTEST</Text>
        <Eingabefeld Labname={Textdatenset.Feldtexte.KAName}/>
        <Eingabefeld Labname={Textdatenset.Feldtexte.STP}/>

        <Text style={{color:'#fff'}}>Vorratslager</Text>
        <Eingabefeld Labname={Textdatenset.Feldtexte.Bezeichnung}/>
        <Eingabefeld Labname={Textdatenset.Feldtexte.Stand}/>
        <Eingabefeld Labname={Textdatenset.Feldtexte.Minimum}/>

        </View>
        </View>
        </View>
      </ScrollView>      
    </SafeAreaView>
  </>
  )
}
const styles = StyleSheet.create({
  sav:{
    backfaceVisibility:'hidden',
    flex: 1,
    flexDirection:'column',
    position:'absolute',
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',
    backgroundColor: '#00000099',
  },
  
  ContainerFragebogen:{
    width:'90%', 
    backgroundColor: '#00000099',  
    paddingHorizontal:20,
    borderRadius:20, 
    marginVertical:20,
    borderColor:'#64748b',
    borderWidth:1,
    marginTop:50,
    alignSelf:'center',
    paddingVertical:60,
  },
  placeholder:{

  },
})
export default Hinzufügen