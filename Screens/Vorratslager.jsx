import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import Navknopf from '../Auslagerung/Components/Knoepfe/Navknopf';
import Anzeigefeld from '../Auslagerung/Components/Rohbau/Anzeigefeld';
import Anzeigetestdummy from '../Auslagerung/Components/Rohbau/Anzeigetestdummy';
const Vorratslager = (props) => {
  return (
    <>
    <SafeAreaView style={styles.sav}>
    <Navknopf navigation={props.navigation} />
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10,flex:1}}>
          <Text style={{color:'#fff',alignSelf:"center",fontSize:30,paddingBottom:20}}>Vorratslager</Text>
          <Anzeigetestdummy/>
          <Anzeigefeld/>
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
    paddingVertical:10,
  },
})

export default Vorratslager