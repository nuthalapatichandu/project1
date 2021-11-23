import {useState,useEffect} from "react";
import axios from "axios";

export default ()=>{
  let [results,setResults]=useState([]);
    let [error,setError]=useState("");

    const Searchapi = async (searchterm)=>{
      try{
        const response =  await axios.get(`https://restcountries.com/v3.1/name/${searchterm}`);
        setResults(response.data);
      } catch(err){
        setError("something went wrong");
      }
    };
    useEffect(()=>{
     Searchapi("india")
    },[]);

    return [Searchapi,results,error]
}