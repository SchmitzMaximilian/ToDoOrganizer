import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import HülleKategorie from '../Rohbau/HülleKategorie';

const Dienstag = () => {
  const [tabdi,settabdi]=useState(false)
  return (
    <>
    <TitelTouch show={tabdi} setshow={settabdi} T={"Dienstag"} />
    {
      tabdi?
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

export default Dienstag