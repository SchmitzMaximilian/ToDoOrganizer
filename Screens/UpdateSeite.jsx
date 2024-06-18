import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import {ScrollView } from 'react-native-gesture-handler'
import Navknopf from '../Auslagerung/Components/Knoepfe/Navknopf'
import EingabeUpdate from '../Auslagerung/Components/Eingabefelder/EingabeUpdate'
import GoBackknopf from '../Auslagerung/Components/Knoepfe/GoBackknopf'
/*
,route nach props maybe 

route.params.INHALT
*/
const UpdateSeite = (props) => {
  useEffect(()=>{ 
  },[])
  return (
    <>
    <SafeAreaView style={styles.sav}>    
      <Navknopf navigation={props.navigation} />    
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <View style={{paddingVertical:10}}>
        <Text style={{color:'#fff'}}>Stichpunktbezeichnung :</Text>
        <EingabeUpdate TK={props.route.params.Thema} SI={props.route.params.position} Labname={props.route.params.inhalt[1]}/>
        </View>
        <GoBackknopf navigation={props.navigation}/>
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
  container: {    
    flexGrow:1,
    flexDirection:'column',
    flex: 1,
    
    width:'100%',   
    height:'100%',  
    alignItems: 'center',
    justifyContent:'flex-start',
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
export default UpdateSeite