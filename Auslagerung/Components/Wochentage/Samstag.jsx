import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import Textdatenset from '../../Datensets/Textdatenset';
const Samstag = () => {
  const [tabsa,settabsa]=useState(false)
  return (
    <>
    <TitelTouch show={tabsa} setshow={settabsa} T={Textdatenset.Wochentage.Sa} />
    {
      tabsa?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
  )
}

export default Samstag