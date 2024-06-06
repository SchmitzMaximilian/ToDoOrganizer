import React ,{ SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Navknopf from '../Auslagerung/Components/Knöpfe/Navknopf'
import Montag from '../Auslagerung/Components/Wochentage/Montag'
import Dienstag from '../Auslagerung/Components/Wochentage/Dienstag'
import Mittwoch from '../Auslagerung/Components/Wochentage/Mittwoch'
import Donnerstag from '../Auslagerung/Components/Wochentage/Donnerstag'
import Freitag from '../Auslagerung/Components/Wochentage/Freitag'
import Samstag from '../Auslagerung/Components/Wochentage/Samstag'
import Sonntag from '../Auslagerung/Components/Wochentage/Sonntag'
const ToDoListe = (props) => {
  return (
  <>
    <SafeAreaView style={styles.sav}>
    <Navknopf navigation={props.navigation} />
      
      <ScrollView style={{backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <View style={styles.ContainerFragebogen}>
        <View style={{flexDirection:'column', width:'100%',paddingTop:10}}>
        <Text style={{color:'#fff'}}>hello</Text>
        <Montag/>
        <Dienstag/>
        <Mittwoch/>
        <Donnerstag/>
        <Freitag/>
        <Samstag/>
        <Sonntag/>
        
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
    marginTop:50,
    alignSelf:'center',
    paddingVertical:60,
  },
  placeholder:{

  },
})
export default ToDoListe