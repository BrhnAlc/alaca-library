import { createContext, useState, useContext, useEffect } from "react"
import axios from "axios"
//! 1- Auth Context'i olusuturuldu
const BooksContext = createContext()

//! 2-Sarmalayici (Provider) Component
const BooksContextProvider = ({ children }) => {
  // //! Local State
 const [query,setQuery]=useState("");
 const [salectType,setSalectType]=useState("all");
 const [myData,setMyData]=useState([])

 const APP_KEY=process.env.REACT_APP_apiKey
console.log(APP_KEY);
const getData=async ()=>{
    const url=`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${select}&key=${APP_KEY}`
    try{
        const {data} = await axios (url)
    } catch (error)
}

 const values={myData,setMyData}
  return (
    <BooksContext.Provider value={}>{children}</BooksContext.Provider>
  )
}

//! 3- consuming custom hook
export const useBooksContext = () => {
  return useContext(BooksContext)
}

export default BooksContextProvider
