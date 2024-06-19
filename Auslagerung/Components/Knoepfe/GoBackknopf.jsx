import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
//onPress={()=>props.navigation.navigate({name:"AddStichpunkt"})}
function GoBackknopf(props) {
  const refresh=(props)=>{
    props.SMV(!props.MV)
    props.function(props.TI)
  }
  return (
    <TouchableOpacity onPress={() => refresh(props) } style={styles.Abspeichern}>
      <Text style={{color:'black'}}>OK</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  Abspeichern:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    padding: 10,
    height:'auto',    
    borderRadius:5,
    borderTopColor:'#1e3a8a',
    borderTopWidth:2,
    borderBottomColor:'#1e3a8a',
    borderBottomWidth:2,
    width:'25%',
    marginHorizontal: '10%',      
    marginVertical: 30,      
  },

})

export default GoBackknopf