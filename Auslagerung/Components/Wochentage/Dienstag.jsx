import React from 'react'
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
      <HülleKategorie/>
      </>
      :
      ""
    }
    </>
  )
}

export default Dienstag