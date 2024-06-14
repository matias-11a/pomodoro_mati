import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const opciones = ["Pomodoros", "Decanso corto", "Descanso largo"];

export default function Header({currentTime, setCurrentTime, setTime}) {

    function cambio(index) {
        const nuevoTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index, nuevoTime);
        setTime(nuevoTime*60)
    }


    return (
        //colo la lista de opciones en horizon
        <View style={{flexDirection: "row"}}>
            {opciones.map((item, index) => (
                <TouchableOpacity
                key={index} 
                onPress={()=> cambio(index) } 
                style={[
                    styles.opcionStyle,
                    currentTime !== index && { borderColor: "transparent" },
                    ]}>
                    <Text style={{fontWeight: 'bold', fontSize:12}}>{item}</Text>
                </TouchableOpacity>
            ))}
            
        </View>
    );
}

const styles = StyleSheet.create({
    opcionStyle: {
        width: '33%',
        padding: 10,
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 15,
        borderColor: 'white',
        marginVertical: 20,
    },
})