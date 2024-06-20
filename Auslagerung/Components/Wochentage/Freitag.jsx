import React from 'react'
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
     <HülleKategorie/>
      </>
      :
      ""
    }
    </>
    
  )
}

export default Freitag