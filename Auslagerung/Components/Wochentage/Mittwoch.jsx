import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import HülleKategorie from '../Rohbau/HülleKategorie';

const Mittwoch = () => {
  const [tabmi,settabmi]=useState(false)
  return (
    <>
    <TitelTouch show={tabmi} setshow={settabmi} T={"Mittwoch"} />
    {
      tabmi?
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

export default Mittwoch