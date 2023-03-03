import { useState, useEffect } from "react";

export const useCounterv2 = () => {
  const [data, setData] = useState("")
  const [value,setValue]= useState("")
  useEffect(() =>
  { console.log("data render") }, [data])

  useEffect(() => { console.log("value render") }, [value])

  useEffect(() => { console.log("any data render") }, [value,data])
  
  return {
    data,
    setData,
    value,
    setValue
  }
}