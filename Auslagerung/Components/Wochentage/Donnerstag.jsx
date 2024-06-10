import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import HülleKategorie from '../Rohbau/HülleKategorie';
const Donnerstag = () => {
  const [tabdo,settabdo]=useState(false)
  return (
    <>
    <TitelTouch show={tabdo} setshow={settabdo} T={"Donnerstag"} />
    {
      tabdo?
      <>
      
      <HülleKategorie/>
      </>
      :
      ""
    }
    </>
  )
}

export default Donnerstag