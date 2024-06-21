import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from "../TitelTouch"
import { useFocusEffect } from '@react-navigation/native';
const Woche = () => {
  const [onlyone,setonlyone]=useState(0)

  let tagarr = [["Montag",1],["Dienstag",2],["Mittwoch",3],["Donnerstag",4],["Freitag",5],["Samstag",6],["Sonntag",7]]
  useFocusEffect(React.useCallback(()=>{
    setonlyone(0)
  },[]))
  return (
    <>
    {tagarr.map((item,index)=>(
      <TitelTouch key={index} show={onlyone} setshow={setonlyone} T={item[0]} V={item[1]}/>      
    ))
}
    </>
  )
}

export default Woche