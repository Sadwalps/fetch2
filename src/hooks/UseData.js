import { useEffect, useState } from "react"

const UseData =(url)=>{
    const[data, setData]=useState([])
    useEffect(()=>{
    fetch(url).then((response)=>{
       response.json().then((result)=>{
        setData(result)
       }) 
    })
    },[])
    return data

}

export default UseData