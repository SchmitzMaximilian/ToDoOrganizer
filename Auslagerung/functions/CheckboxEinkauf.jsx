import React, { useContext, useEffect, useState } from 'react';
import {Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { speichern, update } from './Services/SecureStorage/functionhandler';
import EingabeExtraEinkauf from '../Components/Eingabefelder/EingabeExtraEinkauf';
export default function CheckboxEinkauf(props) {
  const [modalFoodVisible, setModalFoodVisible] = useState(false)
  const [extramenge,setextramenge]=useState(props.Item[4])
  const [erledigt, seterledigt] = useState(props.Item[0])
  let menge= "Genug da"
    if(Number(props.Item[3])>Number(props.Item[2])){
       menge=((Number(props.Item[3]) - Number(props.Item[2]))+ Number(extramenge))
    }else{
      if(extramenge>0){
        menge=Number(extramenge)
      }
    }
  
  const clickhandler=async(itemValue)=>{
    seterledigt(itemValue)
      let arr= props.endArray
      arr[props.Index][0]=itemValue
      arr[props.Index][4]=extramenge
      try{
        const newArr= await speichern(props.OBJN,JSON.stringify(arr))
      }catch(err){
        console.log(err)
      }
  }
  return( <>
    <View style={styles.checkboxContainer}>
    <CheckBox
      value={erledigt?true:false}
      onValueChange={(itemValue) =>clickhandler(itemValue) }
      style={styles.checkbox}
      /><TouchableOpacity onPress={() => setModalFoodVisible(true) }>
      <Text style={styles.beschreibung}>{" " + props.Item[1] + " "}{menge}</Text>
      </TouchableOpacity>
      </View >         
        
        <Modal
        animationType="slide"
        visible={modalFoodVisible}
      >
      <SafeAreaView style={styles.sav}>
        <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
          <Text style={{color:'#fff'}}>{props.Item[1]}</Text>
          <EingabeExtraEinkauf EM={setextramenge}/>

          <TouchableOpacity onPress={() => setModalFoodVisible(false) } style={styles.Basic}>
        <Text style={{color:'#fff'}}>Back</Text>
        </TouchableOpacity>

          
        </View>
        </View>
        </View>
      </SafeAreaView>
      </Modal>
      </>
);   



}
const styles = StyleSheet.create({
  checkbox:{
    borderColor:'black'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    padding:'3%'
  },
  beschreibung: {
    marginLeft: '3%',
    fontSize: 13,
    color:'#fff',
    paddingLeft:10
  },
  Basic:{
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0ea5e9',
    padding: 10,
    borderRadius:6,
    borderWidth:2,
    borderColor: '#0ea5e9',
    marginVertical:10
  },
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


})