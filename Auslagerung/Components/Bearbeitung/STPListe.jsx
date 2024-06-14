import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import {Octicons,Ionicons} from '@expo/vector-icons';
import { löschen, update } from '../../functions/Services/SecureStorage/functionhandler';

const STPListe = (props) => {
  

  const auswahlSTP=(item,index)=>{
    if(props.Arrayname=="Einkaufsliste"){
      props.navigation.navigate({name:"UpdateSeiteEinkauf",params:{inhalt: item,Thema: props.Arrayname, position: index}})
    }else{
      props.navigation.navigate({name:"UpdateSeite",params:{inhalt: item,Thema: props.Arrayname, position: index}})
    }
    
  }
  const vernichten= async(index)=>{
    props.Arr.splice(index,1)
    await update(props.Arrayname,JSON.stringify(props.Arr))
    props.function(props.TI)
  }

  useEffect(()=>{

  },[props])
  return (
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
    {
      props.Arr?.length>0?
      <>
      {
        props.Arr.map((item,index)=>(
          <TouchableOpacity key={'Stichpunkt'+index} onPress={()=>auswahlSTP(item,index)}>
            <View key={'user'+item+index} style={styles.User}>
            <Text style={styles.TextElemente}>{item[1]}</Text><TouchableOpacity onPress={()=>vernichten(index)}><Octicons style={styles.delete} name={'x-circle'} size={25}  color={'red'} /></TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))

      }
      </>
      :
      <Text style={styles.TextElemente}>Keine Einträge vorhanden</Text>
    } 
    </View>
  )
}
const styles = StyleSheet.create({
  delete:{
    position:'relative',
    alignSelf:'flex-end',
    right:10,
    top:2

  },
   
  TextElemente:{
    flex:1,
    color:'#fff',
    paddingHorizontal:20,
    marginVertical:5,
    fontSize:15,
  }, 
  
  User:{
    backgroundColor:'#111111',
    color:'#111',
    position:'relative',
    flex:1, 
    paddingVertical:8,
    marginVertical:5,
    flexDirection:'row',
  },  

});
export default STPListe