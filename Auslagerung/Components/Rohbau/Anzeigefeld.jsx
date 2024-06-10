import React from 'react'
import {View, Text,StyleSheet } from 'react-native'
import Plus from '../Knöpfe/Plus'
import Minus from '../Knöpfe/Minus'
import { speichern,ausgeben,löschen,update} from '../../functions/Services/SecureStorage/functionhandler'
//Secure storage einfügen und beim mapping einbinden anstatt datenset
const Anzeigefeld = (props) => {
  return (
    <>
    {(Beschriftungsdatenset.VorratsArtikel[props.Index].Lager.length>0)&&Beschriftungsdatenset.VorratsArtikel[props.Index].Lager.map((item,index)=>(
      <View style={styles.listerow}>
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