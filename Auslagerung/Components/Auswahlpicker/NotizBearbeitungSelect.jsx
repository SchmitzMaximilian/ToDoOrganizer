import { Picker } from '@react-native-picker/picker'
import React,  {useContext, useEffect, useState }from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Selectdatenset} from '../../Datensets/Selectdatenset'
const NBS = (props) => {
  const [SelectedLanguage, setSelectedLanguage] = useState(props.Auswahl);
  const selectionHandler=(itemValue)=>{
    setSelectedLanguage(itemValue)
    props.storageValue(itemValue)

  }
  useEffect(()=>{ 
    
  },[props])
  return (
    <>
    <Text style={styles.Textelemente}>{Selectdatenset().TopSelectboxenLabel[props.Index]}</Text>
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
     <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={SelectedLanguage} multiline={true} numberOfLines={2} 
     onValueChange={(itemValue, itemIndex) =>selectionHandler(itemValue)}  >
      {
        Selectdatenset().SubSelectboxenLabel[props.Index].length>0&&Selectdatenset().SubSelectboxenLabel[props.Index].map((item,index)=>(
          <Picker.Item  key={'pickup'+index+item}  color="#000" label={item} value={index} />

        ))
      }
    </Picker> 
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    
  Textelemente:{
    color:'#fff',
    paddingHorizontal:80,
    marginVertical:5,
    paddingTop:20,
  },
});
export default NBS