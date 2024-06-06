import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from "../TitelTouch"
import  Textdatenset  from '../../Datensets/Textdatenset';

const Montag = () => {
  const [tabmo,settabmo]=useState(false)
  return (
    <>

    <TitelTouch show={tabmo} setshow={settabmo} T={Textdatenset.Wochentage.Mo} />
    {
      tabmo?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
  )
}

export default Montag