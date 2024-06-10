import React, { useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import {ScrollView } from 'react-native-gesture-handler'
import Eingabefeld from '../Auslagerung/Components/Rohbau/Eingabefeld'
import KategorieSelect from '../Auslagerung/Components/Auswahlpicker/KategorieSelect'
import Navknopf from '../Auslagerung/Components/Knöpfe/Navknopf'
import { Textdatenset } from '../Auslagerung/Datensets/Textdatenset'
import AuswahlBearbeitung from '../Auslagerung/Components/Knöpfe/AuswahlBearbeitung'
import { speichern,ausgeben,löschen,update} from '../Auslagerung/functions/Services/SecureStorage/functionhandler'
import Anlegungnotiz from '../Auslagerung/Components/Eingabeformular/Anlegungnotiz'
import AnlegungFood from '../Auslagerung/Components/Eingabeformular/AnlegungFood'
/*

*/
const Hinzufügen = (props) => {
  const [stshow,setstshow]=useState(false)
  const [lmshow,setlmshow]=useState(false)
  return (
    <>
    <SafeAreaView style={styles.sav}>    
      <Navknopf navigation={props.navigation} />    
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <Text style={{color:'#fff',alignSelf:"center",fontSize:24}}>Stichpunkterzeugung WORK IN PROGRESS</Text>
          <AuswahlBearbeitung KS={setstshow} VL={setlmshow} />
        {
          stshow?
          <>
          <Anlegungnotiz/>
          </>
        :
        ""
        }
        {
          lmshow?
          <>
          <AnlegungFood/>
          </>
          :
          ""
        }
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
    marginTop:30,
    alignSelf:'center',
    paddingVertical:30,
  },
  placeholder:{

  },
})
export default Hinzufügen