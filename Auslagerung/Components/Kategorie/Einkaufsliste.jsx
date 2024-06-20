import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
import CheckboxEinkauf from '../../functions/CheckboxEinkauf';
import Einkauffertigknopf from '../Knoepfe/Einkauffertigknopf';
import { useFocusEffect } from '@react-navigation/native';
const Einkaufsliste = (props) => {
  const [inhalt,setinhalt]=useState([])
  const [id, setID] = useState(0)
  const name = "Einkaufsliste"
  const randKey = () =>{
    setID(Math.random())
  }
  const lesen = async()=>{    
    const data = await ausgeben(name)
    if(data){
      setinhalt(JSON.parse(data))
      console.log(data)
    }
  }
  useFocusEffect(React.useCallback(()=>{
  lesen()
  },[]))
  return (
    <>
    <View key={id} style={styles.Kat}>    
    <Text style={{color:'#fff',fontSize:20,paddingBottom:10,alignSelf:'center'}}>Einkaufsliste</Text>
    
    
    {
      inhalt?.length>0?
      <View style={styles.stpliste}>
      {inhalt.length>0&&inhalt.map((item,index)=>(
      <CheckboxEinkauf key={item+index} OBJN={name} endArray={inhalt} Item={item} Index={index}/>
      
    ))
    }  
    
    </View>
      :
      ""
    }      
    
    </View>
    <Einkauffertigknopf refresh={(neuesArray)=>{randKey(), setinhalt([...neuesArray])}} endArray={inhalt}/>
      </>
  )
}
  
  
const styles = StyleSheet.create({
  stpliste:{padding:5,
    borderTopWidth:2,
    borderTopColor:"black",
    alignSelf:"stretch",
    backgroundColor:"#7e22ce"
  },
  Thema:{
    color:'#fff',
    alignSelf:'center'
  },
  Kat:{
    flex:1,
    backgroundColor: 'gray',
    alignItems:'flex-start',
    paddingTop:10,
    borderWidth:2,
    borderColor:"black",
  },
  row:{
    flexDirection:'row',
  }

})
export default Einkaufsliste