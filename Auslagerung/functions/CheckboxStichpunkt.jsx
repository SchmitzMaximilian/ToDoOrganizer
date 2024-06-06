import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';


export default function CheckboxStichpunkt(props) {
  const [erledigt, seterledigt] = useState(props.Item[0])
  return( 
    <View style={styles.checkboxContainer}>
    <CheckBox
      value={erledigt?true:false}
      onValueChange={(itemValue) => itemValue}
      style={styles.checkbox}
      /><Text style={styles.beschreibung}>{props.Item[1]}</Text>
      </View >         
        
        
);   



}
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    padding:'3%'
  },
  beschreibung: {
    marginLeft: '3%',
    fontSize: 13,
    color:'#fff'
  },


})