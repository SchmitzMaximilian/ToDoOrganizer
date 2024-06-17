import React ,{ SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Navknopf from '../Auslagerung/Components/Knoepfe/Navknopf'
import Einkaufsliste from '../Auslagerung/Components/Kategorie/Einkaufsliste'
const Einkauf = (props) => {
  return (
    <>
    <SafeAreaView style={styles.sav}>
    <Navknopf navigation={props.navigation} />
      
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <Einkaufsliste id={1}/>
        
        </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
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
  thema:{flexDirection:'column',
    gap:10,
    flex:8,
    alignContent:'center',
    paddingHorizontal:'11%'
  },
  Kat:{
    flex:1,
    backgroundColor: 'gray',
    alignItems:'center',
    borderWidth:2,
    borderColor:"black",
  },
})
export default Einkauf