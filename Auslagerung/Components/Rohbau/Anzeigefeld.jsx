import React from 'react'
import {View, Text,StyleSheet } from 'react-native'
import Plus from '../Knöpfe/Plus'
import Minus from '../Knöpfe/Minus'
//Secure storage einfügen und beim mapping einbinden anstatt datenset
const Anzeigefeld = (props) => {
  return (
    <>
    {(Beschriftungsdatenset.VorratsArtikel[props.Index].Lager.length>0)&&Beschriftungsdatenset.VorratsArtikel[props.Index].Lager.map((item,index)=>(
      <View>
      <Text style={styles.inputsanity}>{Beschriftungsdatenset.VorratsArtikel[props.Index].Artikelname}</Text>
      <Text style={styles.inputsanity}>{item[1]}</Text>
      <Plus/>
      <Text style={styles.inputsanity}>{item[3]}</Text>
      <Minus/>
      </View>
      ))}
    </>
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
export default Anzeigefeld