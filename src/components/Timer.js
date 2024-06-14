import { Text, View, StyleSheet} from "react-native";

export default function Timer({time}) {
    const formatoDeTiempo = `${Math.floor(time/60).toString().padStart(2,"0")}:${(time%60).toString().padStart(2,"0")}`;

    return(
        <View style={styles.container}>
            <Text style={styles.tiempo}>{formatoDeTiempo}</Text>
        </View>
    );
}

//toma un objeto de clase
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        justifyContent: "center", 
        borderRadius: 15,
        padding: 20,
        flex: 0.3,
    },
    
    tiempo: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },

});