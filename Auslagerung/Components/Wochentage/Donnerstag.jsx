import React from 'react'
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