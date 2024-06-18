import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import {ScrollView } from 'react-native-gesture-handler'
import Navknopf from '../Auslagerung/Components/Knoepfe/Navknopf'
import GoBackknopf from '../Auslagerung/Components/Knoepfe/GoBackknopf'
import UpdatefeldBestand from '../Auslagerung/Components/Eingabefelder/UpdateFood/UpdatefeldBestand'
import UpdatefeldFood from '../Auslagerung/Components/Eingabefelder/UpdateFood/UpdatefeldFood'
import UpdatefeldMinimum from '../Auslagerung/Components/Eingabefelder/UpdateFood/UpdatefeldMinimum'
/*
,route nach props maybe 

route.params.INHALT

*/
const UpdateSeiteEinkauf = (props) => {
    const NewArray = props.route.params.inhalt
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
          <Text style={{color:'#fff'}}>Artikelname :</Text>
        <UpdatefeldFood option={1} TK={props.route.params.Thema} SI={props.route.params.position} Labname={NewArray[1]}/>
        </View>
        <View style={{paddingVertical:10}}>
        <Text style={{color:'#fff'}}>Lagerbestand :</Text>
        <UpdatefeldBestand option={2} TK={props.route.params.Thema} SI={props.route.params.position} Labname={NewArray[2]}/>
        </View>
        <View style={{paddingVertical:10}}>
        <Text style={{color:'#fff'}}>Minimumswert :</Text>        
        <UpdatefeldMinimum option={3} TK={props.route.params.Thema} SI={props.route.params.position} Labname={NewArray[3]}/>
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
export default UpdateSeiteEinkauf