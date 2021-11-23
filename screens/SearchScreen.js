import React ,{useState} from "react";
import {View,Text,FlatList,StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

function SearchScreen (){
  let [term ,setTerm] = useState("");
  let [Searchapi,results,error]=useResults();
  return(
    <View>
        <SearchBar term={term} 
            onTermChange={newterm=>setTerm(newterm)}
            onTermSubmit={()=>Searchapi(term)}
        />
        <Text>we found {results.length} results </Text>
        <FlatList  data={results} 
         renderItem={({item})=>{
           return(
            <View style={styles.container}>
              <View style={styles.box}>
                 <Text style={styles.heading}>Country Name</Text>
                 <Text>{item.name.common}</Text>
              </View>
              <View style={styles.box}>
                  <Text style={styles.heading}>Capital</Text>
                  <Text>{item.capital}</Text>
              </View>
              <View style={styles.box}> 
                   <Text style={styles.heading}>Official</Text>
                  <Text>{item.name.official}</Text>
              </View>
              <View style={styles.box}>
                  <Text style={styles.heading}>Symbol</Text>
                  <Text>{item.cca3}</Text>
              </View>
              <View style={styles.box}>
                  <Text style={styles.heading}>Flag</Text>
                  <Text>{item.flag}</Text>
              </View>
              <View style={styles.box}>
                  <Text style={styles.heading}>Code</Text>
                  <Text>{item.idd.root}</Text>
              </View>
            </View>  
           );
         }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent: "center"
  },
  box:{
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"white",
    borderRadius:10,
    elevation: 5,
    margin:10
  },
  heading:{
    fontSize: 18,
    textAlign:"center",
    marginBottom: 40,
    fontWeight: "bold",
    color: "navy"
  }

})

export default SearchScreen;
