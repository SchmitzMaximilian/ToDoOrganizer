import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import Textdatenset from '../../Datensets/Textdatenset';
const Freitag = () => {
  const [tabfr,settabfr]=useState(false)
  return (
    <>
    <TitelTouch show={tabfr} setshow={settabfr} T={Textdatenset.Wochentage.Fr} />
    {
      tabfr?
      <>
     <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
    
  )
}

export default Freitag