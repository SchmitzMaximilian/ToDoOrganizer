import React from 'react'
import {View, Text,StyleSheet } from 'react-native'
import Plus from '../Knöpfe/Plus'
import Minus from '../Knöpfe/Minus'
const Anzeigetestdummy = () => {
  return (
    <>
    <View style={styles.listerow}>
      <Text style={styles.inputsanity}>Artikelname</Text>
      <Text style={styles.inputsanity}>Mindestbestand</Text>
      <Plus/>
      <Text style={styles.inputsanity}>Lagerbestand</Text>
      <Minus/>
      </View>
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
export default Anzeigetestdummy