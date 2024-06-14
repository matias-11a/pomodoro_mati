import { StatusBar } from 'expo-status-bar';

// IMPORTANTE: siempre importar las cosas que necesito en mi app
import { StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import {Audio} from "expo-av"; 

//audio

const colores = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState("POMO" | "CORTO" | "LARGO");
  const [activado, activado2] = useState(false);

  //nos permite ver los ciclos de vida de un componente
  useEffect(()=>{
    let intervalo = null;
    if(activado){
      intervalo = setInterval(() =>{
        setTime(time - 1);
      }, 1000);
    }
    else{
      clearInterval(intervalo);
    }
    if(time === 0){
      activado2(false);
      setIsWorking(prev => !prev);
      setTime(isWorking ? 300 : 1500);
    }
    return()=>clearInterval(intervalo);

    

  }, [activado, time])


  function iniciarBoton() {
    sonido();
    activado2(!activado);
  }

  
  async function sonido(){
    const{sound} = await Audio.Sound.createAsync(require("./assets/click.mp3"));
    await sound.playAsync();
  }
  


  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colores[currentTime]}]}>

      <View style={{flex:1, paddingHorizontal: 15, paddingTop: Platform.OS == "android" && 50}}> 
        <Text style={styles.titulo} >Pomodoro</Text>
        
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime ={setTime} ></Header>
        <Timer time={time}></Timer>
        
        <TouchableOpacity onPress={iniciarBoton} style={styles.boton}>
          <Text style={{color: "white", fontWeight:"bold"}} >
            {activado ? "STOP" : "START"} </Text>
        </TouchableOpacity>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
  },

  boton: {
    backgroundColor: "#333333",
    marginTop: 15,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },


});
