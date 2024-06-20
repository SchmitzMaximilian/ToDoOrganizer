import React from 'react'
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
      <HülleKategorie/>
      </>
      :
      ""
    }
    </>
  )
}

export default Mittwoch