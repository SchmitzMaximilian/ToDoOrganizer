import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import Textdatenset from '../../Datensets/Textdatenset';
const Sonntag = () => {
  const [tabso,settabso]=useState(false)
  return (
    <>
    <TitelTouch show={tabso} setshow={settabso} T={Textdatenset.Wochentage.So} />
    {
      tabso?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
  )
}

export default Sonntag