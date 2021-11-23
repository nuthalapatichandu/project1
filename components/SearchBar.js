import React from "react";
import {View,Text, StyleSheet, TextInput} from "react-native";



let Searchbar = ({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.background}>
            <TextInput placeholder="enter country name" 
            style={styles.searchcenter}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
            >
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white",
        height: 45,
        marginHorizontal: 15,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent:"center",
    },
    searchcenter:{
        textAlign:"center",
        padding: 10,
        fontWeight: "bold"

    }

})

export default Searchbar;