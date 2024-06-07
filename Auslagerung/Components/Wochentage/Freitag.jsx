import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import HülleKategorie from '../Rohbau/HülleKategorie';
const Freitag = () => {
  const [tabfr,settabfr]=useState(false)
  return (
    <>
    <TitelTouch show={tabfr} setshow={settabfr} T={"Freitag"} />
    {
      tabfr?
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

export default Freitag