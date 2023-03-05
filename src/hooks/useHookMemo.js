import React, { useState , useMemo } from 'react'

export const useHookMemo = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState("learn hook")
  
  const memoData = useMemo(() => {
    return data
  }, [])
  
  const newMemoData = useMemo(() => {
    return data
  }, [text])
  
  return {
    text,
    setText,
    data,
    setData,
    memoData,
    newMemoData
  }
}
