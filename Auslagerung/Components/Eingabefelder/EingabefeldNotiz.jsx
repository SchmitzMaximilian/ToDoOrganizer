import React, {  useEffect, useState } from "react";
import {View, TextInput,StyleSheet } from 'react-native'
import { ausgeben, speichern } from "../../functions/Services/SecureStorage/functionhandler";
const EingabefeldNotiz = (props) => {
  const[txtvalue,settxtvalue]=useState('');
  const [erfolg,seterfolg]=useState(0)
    const STPerstellen= async(t)=>{
      settxtvalue(t) 
      text = t;
      const data = await ausgeben(props.TK)
      if(data){
      let arr=JSON.parse(data)
      arr[props.SI][1]=t
      try{
      const dataSave = await speichern(props.TK,JSON.stringify(arr))
      if(dataSave==true){
        seterfolg(1)
        setTimeout(()=>{seterfolg(0)},1000)
      }
      }catch(err){
        console.log(err)
      }
      
      } 
  }
    useEffect(()=>{
      settxtvalue('')
      if(props.P==true){
        settxtvalue('')
        props.PF(false)
      }
     },[props])
  return (
    <View >
      <TextInput style={styles(erfolg).inputsanity} onChangeText={text=>STPerstellen(text)} value={txtvalue} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}>        
      </TextInput>
    </View>
  )
}

const styles = (erfolg)=>StyleSheet.create({
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
    backgroundColor: erfolg==0?'#6b728090':'#047857'
  }
  
});
export default EingabefeldNotiz