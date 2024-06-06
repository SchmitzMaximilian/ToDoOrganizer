import React, {  useEffect, useState } from "react";
import {View, TextInput,StyleSheet } from 'react-native'
const Eingabefeld = (props) => {
  const[txtvalue,settxtvalue]=useState(''); 
  function textChangeHandler(t){
    settxtvalue(t) 
    text = t; 
    }
  return (
    <View>
      <TextInput style={styles.Text} onChangeText={text=>textChangeHandler(text)} value={txtvalue} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}>        
      </TextInput>
    </View>
  )
}

const styles = ()=>StyleSheet.create({
  Text : {
    color: '#FFF',
    fontSize:16,
    marginBottom:4,
    textAlign:'left',
    padding: 10,
    paddingLeft:60,
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:15,
    color:'#f8fafc',
    zIndex:10,
    backgroundColor: '#6b728090'
  },


});
export default Eingabefeld