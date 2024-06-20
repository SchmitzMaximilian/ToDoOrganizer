import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import HülleKategorie from '../Rohbau/HülleKategorie';
const Samstag = () => {
  const [tabsa,settabsa]=useState(false)
  return (
    <>
    <TitelTouch show={tabsa} setshow={settabsa} T={"Samstag"} />
    {
      tabsa?
      <>
      <HülleKategorie/>
      </>
      :
      ""
    }
    </>
  )
}

export default Samstag