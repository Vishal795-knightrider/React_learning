import {useEffect,useState} from 'react'

function useCurrency(currency){
    const [Data,setData]=useState({})
    useEffect(()=>{
        fetch()
        .then(res=>res.json)
        .then(res=>setData(res[currency]))
    },[currency])
}