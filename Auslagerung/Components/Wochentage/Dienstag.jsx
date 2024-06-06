import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import  Textdatenset from '../../Datensets/Textdatenset';

const Dienstag = () => {
  const [tabdi,settabdi]=useState(false)
  return (
    <>
    <TitelTouch show={tabdi} setshow={settabdi} T={Textdatenset.Wochentage.Di} />
    {
      tabdi?
      <>
      <Text style={{color:'#fff'}}>Moin moin</Text>
      </>
      :
      ""
    }
    </>
  )
}

export default Dienstag