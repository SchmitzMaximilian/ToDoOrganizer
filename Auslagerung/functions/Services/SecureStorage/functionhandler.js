import * as SecureStore from 'expo-secure-store'

export async function speichern(param,value){
  await SecureStore.setItemAsync(param,value);
  
  return true;
}
export async function ausgeben(param){
  const data= await SecureStore.getItemAsync(param);
    return data;
}
export async function löschen(param){
  const data= await SecureStore.deleteItemAsync(param);
    return data;
}
export async function update(param,value){
  await SecureStore.setItemAsync(param,value);
    return true;
}