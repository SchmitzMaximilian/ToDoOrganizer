import * as SecureStore from 'expo-secure-store'

export async function speichern(param){
  const data= await SecureStore.setItemAsync(param);
  return data;
}
export async function ausgeben(param){
  const data= await SecureStore.getItemAsync(param);
    return data;
}
export async function löschen(param){
  const data= await SecureStore.deleteItemAsync(param);
    return data;
}
export async function update(param){
  const data= await SecureStore.setItemAsync(param);
    return data;
}