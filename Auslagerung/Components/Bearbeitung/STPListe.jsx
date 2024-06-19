import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,TouchableOpacity,Modal} from 'react-native';
import {Octicons,Ionicons} from '@expo/vector-icons';
import { löschen, update } from '../../functions/Services/SecureStorage/functionhandler';
import EingabeUpdate from '../Eingabefelder/EingabeUpdate';
import GoBackknopf from '../Knoepfe/GoBackknopf';
import UpdatefeldFood from '../Eingabefelder/UpdateFood/UpdatefeldFood';
import UpdatefeldBestand from '../Eingabefelder/UpdateFood/UpdatefeldBestand';
import UpdatefeldMinimum from '../Eingabefelder/UpdateFood/UpdatefeldMinimum';
/*
const inhalt = item
      const position = index
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.Abspeichern}>
      <Text style={{color:'black'}}>OK</Text>
      </TouchableOpacity>

*/
const STPListe = (props) => {
  console.log("Enter STPListe")
  const [modalVisible, setModalVisible] = useState(false)
  const [modalFoodVisible, setModalFoodVisible] = useState(false)
  const [inhalt,setinhalt] =useState('')
  const [position,setposition]=useState('')
  const auswahlSTP=(item,index)=>{
     setinhalt(item)
     setposition(index)
    if(props.ArrayN=="Einkaufsliste"){
      setModalFoodVisible(true)
      
      console.log("WIP")
      
    }
    else{
      
      setModalVisible(true)
      console.log("WIP")
      
    }
    
  }
  const vernichten= async(index)=>{
    console.log("Enter Delete")
    props.Arr.splice(index,1)
    await update(props.ArrayN,JSON.stringify(props.Arr))
    console.log("Jetzt kommt die Funktion")
    props.function(props.TI)
    console.log("Exit Liste")
  }

  useEffect(()=>{

  },[props])
  return (
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
    
    
    
    
    {
      props.Arr?.length>0?
      <>
      {
        props.Arr.map((item,index)=>(
          <TouchableOpacity key={'Stichpunkt'+index} onPress={()=>auswahlSTP(item,index)}>
            <View key={'user'+item+index} style={styles.User}>
            <Text style={styles.TextElemente}>{item[1]}</Text><TouchableOpacity onPress={()=>vernichten(index)}><Octicons style={styles.delete} name={'x-circle'} size={25}  color={'red'} /></TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))

      }
      </>
      :
      <Text style={styles.TextElemente}>Keine Einträge vorhanden</Text>
    } 

<Modal
      animationType="slide"
      
      visible={modalVisible}
      >
        <SafeAreaView style={styles.sav}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <View style={{paddingVertical:10}}>
        <Text style={{color:'#fff'}}>Stichpunktbezeichnung :</Text>
        <EingabeUpdate TK={props.ArrayN} SI={position} Labname={inhalt[1]}/>
        </View>
        <GoBackknopf SMV={setModalVisible} MV={modalVisible} function={props.function} />
        </View>
        </View>
        </View>
      </SafeAreaView>
      </Modal>



      <Modal
      animationType="slide"
      visible={modalFoodVisible}
      >
        <SafeAreaView style={styles.sav}>
        <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <View style={{paddingVertical:10}}>
          <Text style={{color:'#fff'}}>Artikelname :</Text>
        <UpdatefeldFood option={1} TK={props.ArrayN} SI={position} Labname={inhalt[1]}/>
        </View>
        <View style={{paddingVertical:10}}>
        <Text style={{color:'#fff'}}>Lagerbestand :</Text>
        <UpdatefeldBestand option={2} TK={props.ArrayN} SI={position} Labname={inhalt[2]}/>
        </View>
        <View style={{paddingVertical:10}}>
        <Text style={{color:'#fff'}}>Minimumswert :</Text>        
        <UpdatefeldMinimum option={3} TK={props.ArrayN} SI={position} Labname={inhalt[3]}/>
        </View>
        <GoBackknopf SMV={setModalFoodVisible} MV={modalFoodVisible} function={props.function}/>
        </View>
        </View>
        </View>
      </SafeAreaView>
      </Modal>

 
    </View>
  )
}
const styles = StyleSheet.create({
  delete:{
    position:'relative',
    alignSelf:'flex-end',
    right:10,
    top:2

  },
   
  TextElemente:{
    flex:1,
    color:'#fff',
    paddingHorizontal:20,
    marginVertical:5,
    fontSize:15,
  }, 
  
  User:{
    backgroundColor:'#111111',
    color:'#111',
    position:'relative',
    flex:1, 
    paddingVertical:8,
    marginVertical:5,
    flexDirection:'row',
  },
  sav:{
    backfaceVisibility:'hidden',
    flex: 1,
    flexDirection:'column',
    position:'absolute',
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',
    backgroundColor: '#00000099',
  },
  container: {    
    flexGrow:1,
    flexDirection:'column',
    flex: 1,
    
    width:'100%',   
    height:'100%',  
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  ContainerFragebogen:{
    width:'90%', 
    backgroundColor: '#00000099',  
    paddingHorizontal:20,
    borderRadius:20, 
    marginVertical:20,
    borderColor:'#64748b',
    borderWidth:1,
    marginTop:30,
    alignSelf:'center',
    paddingVertical:30,
  },
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

});
export default STPListe