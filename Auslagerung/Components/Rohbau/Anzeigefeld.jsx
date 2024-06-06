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
      <Text>{Beschriftungsdatenset.VorratsArtikel[props.Index].Artikelname}</Text>
      <Text>{item[1]}</Text>
      <Plus/>
      <Text>{item[3]}</Text>
      <Minus/>
      </View>
      ))}
    </>
  )
}

export default Anzeigefeld