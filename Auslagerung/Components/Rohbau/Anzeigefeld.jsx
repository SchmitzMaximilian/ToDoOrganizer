import React, { useEffect, useState } from 'react'
import {View, Text,StyleSheet } from 'react-native'
import Plus from '../Knoepfe/Plus'
import Minus from '../Knoepfe/Minus'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import { useFocusEffect } from '@react-navigation/native';

const Anzeigefeld = (props) => {
  const [LagerArray,setLagerArray]=useState([])
  const abruf=async()=>{
    const data = await ausgeben("Einkaufsliste")
    setLagerArray(JSON.parse(data))
  }
  useFocusEffect(React.useCallback(()=>{
    abruf()
     
  },[]))
  return (
    <>
    {
      LagerArray?.length>0?    
    <>
    {LagerArray.length>0&&LagerArray.map((item,index)=>(
      <View key={item[1]} style={styles.listerow}>
      <Text style={styles.inputsanity}>{item[1]}</Text>
      <Text style={styles.inputsanity}>{item[3]}</Text>
      <Plus id={index} Zahl={item[2]} refresh={setLagerArray}/>      
      <Text style={styles.inputsanity}>{item[2]}</Text>
      <Minus id={index} Zahl={item[2]} refresh={setLagerArray}/>
      </View>
      ))
    
    }
      
    </>
    :
    ""
    }
    </>
  )
}
const styles = StyleSheet.create({
  inputsanity:{
    flex:1,
    color: '#FFF',
    fontSize:16,
    textAlign:'left',
    padding: 10,
    borderWidth:2,
    alignSelf:'center',
    borderColor: '#047857',
    borderRadius:6,
    
    backgroundColor: '#6b728090',
    
  },
  listerow:{
    flex: 5,
    flexDirection:'row',
    gap: 20,
    marginVertical:10
  }
  
});
export default Anzeigefeld