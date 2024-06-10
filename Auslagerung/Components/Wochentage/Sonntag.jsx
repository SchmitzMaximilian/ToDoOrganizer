import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import HülleKategorie from '../Rohbau/HülleKategorie';
const Sonntag = () => {
  const [tabso,settabso]=useState(false)
  return (
    <>
    <TitelTouch show={tabso} setshow={settabso} T={"Sonntag"} />
    {
      tabso?
      <>
      
      <HülleKategorie/>
      </>
      :
      ""
    }
    </>
  )
}

export default Sonntag