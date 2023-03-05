import React from 'react'
import { useHookState } from '../../hooks/useHookState'

export const HookState = () => {
  const {
    data,
    number,
    setNumber,
    showValues,
    setData,
    newData,
    sentence,
    setWord, showStringValues,
    setStringData
  } = useHookState()


  return (
    <div className="App">
      {/* number exercise */}
      <div className='number-exercise' style={{ border: '1px solid rgba(0, 0, 0, 0.05)', lineHeight: 2, padding: 20 }}>
        Data: {data}
        <br />
        Number: {number}
        <br />
        <button onClick={() => setNumber()}>Update</button>
        <br />
        <button onClick={() => showValues()}>Show Values On Console</button>
        <br />
        <button onClick={() => setData("Adolfha")}>Data</button>
      </div>
      <br />
      {/* string exercise */}
      <div className='string-exercise' style={{ border: '1px solid rgba(0, 0, 0, 0.05)', lineHeight: 2, padding: 20 }}>
        String Data: {newData}
        <br />
        Sentence: {sentence}
        <br />
        <button onClick={() => setWord()}>Update Sentence</button>
        <br />
        <button onClick={() => showStringValues()}>Show Values On Console</button>
        <br />
        <button onClick={() => setStringData("Adolfha")}>String Data</button>
      </div>
    </div>
  )
}
