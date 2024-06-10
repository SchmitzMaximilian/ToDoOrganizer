import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import CheckboxStichpunkt from '../../functions/CheckboxStichpunkt';
const Geburtstage = () => {
  return (
    <View style={styles.stpliste}>
      <Text style={{color:"#fff"}}>mieep mieep</Text>
      <Text style={{color:"#fff"}}>mieep mieep</Text>
      <Text style={{color:"#fff"}}>mieep mieep</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  stpliste:{padding:5,
    borderTopWidth:2,
    borderTopColor:"black",
    alignSelf:"stretch",
    backgroundColor:"#d946ef"
  }

})
export default Geburtstage