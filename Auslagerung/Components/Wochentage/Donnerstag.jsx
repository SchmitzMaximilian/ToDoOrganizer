import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import Textdatenset from '../../Datensets/Textdatenset';
const Donnerstag = () => {
  const [tabdo,settabdo]=useState(false)
  return (
    <>
    <TitelTouch show={tabdo} setshow={settabdo} T={Textdatenset.Wochentage.Do} />
    {
      tabdo?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
  )
}

export default Donnerstag