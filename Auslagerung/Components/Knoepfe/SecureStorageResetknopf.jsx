import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { löschen, speichern} from '../../functions/Services/SecureStorage/functionhandler'
const SSRK = () => {
  const deletealert=()=>
    Alert.alert(
      'Warnung',
      'Sie sind im Begriff ALLE von Ihnen erstellten Stichpunkte- und Lebensmitteleinträge zu löschen.',

      [
        {
          text: 'Löschen',
          onPress:()=> deleteall()
        },
        {
          text: 'Abbrechen',
          onPress: ()=> console.log('Löschen Abgebrochen')
        }
      ]

    )

  
  const deleteall=async()=>{
    let Arr = ['ersteabfrage','Allgemein','Formulare','Geburtstage','Hausarbeiten','Reisecheckliste','Sonstiges','Termine','Einkaufsliste']

    
    for(let i=0;i<Arr.length;i++){      
      await löschen(Arr[i].toString())
      await speichern(Arr[i],JSON.stringify([]))
    }
    
  }
  return (
    <>
    <TouchableOpacity onPress={()=>deletealert()} style={styles.end}>
      <Text style={{color:'red'}}>Reset Speicher</Text>
    </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  end:{
    alignSelf:'flex-end',
    backgroundColor:'black',
    width:'30%',
    borderColor:'red',
    borderWidth:3,
    alignItems:'center',
    paddingVertical:20,
    marginRight:40,
    marginTop:20

  }
})
export default SSRK