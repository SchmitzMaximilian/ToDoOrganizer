import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from "../TitelTouch"
import HülleKategorie from '../Rohbau/HülleKategorie';

const Montag = () => {
  const [tabmo,settabmo]=useState(false)
  return (
    <>

    <TitelTouch show={tabmo} setshow={settabmo} T={"Montag"} />
    {
      tabmo?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      <HülleKategorie/>
      </>
      :
      ""
    }
    </>
  )
}

export default Montag