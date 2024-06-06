import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import Textdatenset from '../../Datensets/Textdatenset';

const Mittwoch = () => {
  const [tabmi,settabmi]=useState(false)
  return (
    <>
    <TitelTouch show={tabmi} setshow={settabmi} T={Textdatenset.Wochentage.Mi} />
    {
      tabmi?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
  )
}

export default Mittwoch