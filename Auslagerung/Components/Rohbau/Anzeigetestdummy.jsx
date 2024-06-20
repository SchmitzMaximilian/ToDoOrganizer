import React from 'react'
import {View, Text,StyleSheet } from 'react-native'
const Anzeigetestdummy = () => {
  return (
    <>
    <View style={styles.listerow}>
      <Text style={styles.inputsanity}>Artikelname</Text>
      <Text style={styles.inputsanity}>Mindestbestand</Text>
      <Text style={styles.Basic}></Text>
      <Text style={styles.inputsanity}>Lagerbestand</Text>
      <Text style={styles.Basic}></Text>
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
  },
  Basic:{
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15
  },
});
export default Anzeigetestdummy