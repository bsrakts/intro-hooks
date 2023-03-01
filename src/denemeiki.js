import React from 'react'
import { useState } from 'react'

function denemeiki() {
  let number = 10
  let [data, setData] = useState(100)
  const setNumber = () => {
    setData(data + 1)
  }

  const showValues = () => {
    console.log("Number: ", number);
    console.log("Data: ", data);
  }

  let sentence = "I learn useState"
  let [newData, setStringData] = useState("I will practice useState");
  const setWord = () => {
    setStringData(newData.replace(
      "practice", `more practice`
    ))
  }

  const showStringValues = () => {
    console.log("Sentence: ", sentence);
    console.log("New Data: ", newData);
  }


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
)}

export default denemeiki;