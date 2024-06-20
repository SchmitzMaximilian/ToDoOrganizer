import React, {  useEffect, useState } from "react";
import {View, TextInput,StyleSheet } from 'react-native'
const EingabeExtraEinkauf = (props) => {
  const[intvalue,setintvalue]=useState(0);
  const Extrakauf= async(t)=>{
    setintvalue(t) 
    text = t;
     props.EM(t)
  }
  return (
    <View >
      <TextInput style={styles.inputsanity} onChangeText={text=>Extrakauf(text)} value={intvalue} placeholder="Anzahl der Zusatzeinkaufsmenge" placeholderTextColor={'#f1f5f9'}>        
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
export default EingabeExtraEinkauf