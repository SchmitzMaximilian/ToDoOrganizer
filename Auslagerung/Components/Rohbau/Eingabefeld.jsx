import React, {  useEffect, useState } from "react";
import {View, TextInput,StyleSheet } from 'react-native'
const Eingabefeld = (props) => {
  const[txtvalue,settxtvalue]=useState(''); 
  function textChangeHandler(t){
    settxtvalue(t) 
    text = t;
    props.storageValue(t) 
    }
    useEffect(()=>{
      
     },[props])
  return (
    <View >
      <TextInput style={styles.inputsanity} onChangeText={text=>textChangeHandler(text)} value={txtvalue} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}>        
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  inputsanity:{
    color: '#FFF',
    fontSize:16,
    marginBottom:4,
    textAlign:'left',
    padding: 10,
    paddingLeft:20,
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#047857',
    borderRadius:6,
    marginVertical:15,
    
    zIndex:10,
    backgroundColor: '#6b728090'
  }
  
});
export default Eingabefeld